import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery-preview.component.html',
})
export class GalleryPreviewComponent {
  selectedImage: any = null;

  previewImages = [
    { url: 'gallery/14.png', title: 'Паркова зона' },
    { url: 'gallery/8.png', title: 'Затишка альтанка' },
    { url: 'gallery/4.png', title: 'Ресторан «Пуаро»' },
    { url: 'gallery/5.png', title: 'Територія готелю' },
  ];

  openImage(image: any) {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeImage() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }
}
