import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

interface GalleryItem {
  url: string;
  category: 'rooms' | 'restaurant' | 'leisure' | 'exterior';
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, PageHeroComponent],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  activeFilter: string = 'all';

  images: GalleryItem[] = [
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000', category: 'exterior', title: 'Екстер’єр готелю' },
    { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000', category: 'rooms', title: 'Номер Люкс' },
    { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000', category: 'restaurant', title: 'Ресторан «Пуаро»' },
    { url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1000', category: 'leisure', title: 'Боулінг-клуб' },
    { url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1000', category: 'rooms', title: 'Стандарт Твін' },
    { url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=1000', category: 'restaurant', title: 'Сніданок шведський стіл' },
    { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000', category: 'exterior', title: 'Нічний вигляд' },
    { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000', category: 'leisure', title: 'Зона відпочинку' },
  ];

  get filteredImages() {
    return this.activeFilter === 'all' 
      ? this.images 
      : this.images.filter(img => img.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
