import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService, Room } from '../../../core/services/room.service';

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './room-detail.component.html',
})
export class RoomDetailComponent implements OnInit {
  room: Room | undefined;
  bookingForm: FormGroup;
  submitted = false;

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
    }
  }

  onBook() {
    this.submitted = true;
    if (this.bookingForm.valid) {
      alert(`Дякуємо! Запит на бронювання номера "${this.room?.title}" надіслано. Ми зателефонуємо вам для підтвердження.`);
      this.bookingForm.reset();
      this.submitted = false;
    }
  }
}
