import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService, Room, RoomPriceOption } from '../../../core/services/room.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './room-detail.component.html',
})
export class RoomDetailComponent implements OnInit {
  private translate = inject(TranslateService);
  room: Room | undefined;
  bookingForm: FormGroup;
  submitted = false;
  selectedImageIndex = 0;
  selectedPriceOption: RoomPriceOption | null = null;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private fb: FormBuilder
  ) {
    this.bookingForm = this.fb.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      guests: ['1', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('id');
    if (roomId) {
      this.room = this.roomService.getRoomById(roomId);
      if (this.room?.priceOptions && this.room.priceOptions.length > 0) {
        this.selectedPriceOption = this.room.priceOptions[0];
        this.bookingForm.patchValue({ guests: this.selectedPriceOption.guests.toString() });
      }
    }
  }

  selectPriceOption(option: RoomPriceOption) {
    this.selectedPriceOption = option;
    this.bookingForm.patchValue({ guests: option.guests.toString() });
  }

  get displayPrice(): number {
    return this.selectedPriceOption ? this.selectedPriceOption.price : (this.room?.price || 0);
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  get currentImage(): string {
    if (this.room?.images && this.room.images.length > 0) {
      return this.room.images[this.selectedImageIndex];
    }
    return this.room?.image || '';
  }

  onBook() {
    this.submitted = true;
    if (this.bookingForm.valid) {
      const guestsLabel = this.selectedPriceOption 
        ? this.translate.instant(this.selectedPriceOption.label) 
        : `${this.bookingForm.value.guests} ${this.translate.instant('rooms.capacity.1_3')}`;
      
      const successMsg = this.translate.instant('contacts.form.success_alert');
      alert(`${successMsg} (${this.translate.instant(this.room?.title || '')} - ${guestsLabel})`);
      
      this.bookingForm.reset();
      this.submitted = false;
    }
  }
}
