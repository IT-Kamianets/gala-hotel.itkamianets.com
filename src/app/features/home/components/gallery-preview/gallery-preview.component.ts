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
  previewImages = [
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', title: 'Готель ззовні' },
    { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800', title: 'Затишні апартаменти' },
    { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800', title: 'Вишуканий ресторан' },
    { url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=800', title: 'Боулінг-центр' },
  ];
}
