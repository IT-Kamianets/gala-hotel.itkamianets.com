import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './gallery-preview.component.html',
})
export class GalleryPreviewComponent {
  selectedImage: any = null;

  previewImages = [
    { url: 'gallery/14.png', title: 'home.gallery.items.park' },
    { url: 'gallery/8.png', title: 'home.gallery.items.gazebo' },
    { url: 'gallery/4.png', title: 'home.gallery.items.puaro' },
    { url: 'gallery/5.png', title: 'home.gallery.items.exterior' },
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
