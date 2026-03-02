import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';

interface GalleryItem {
  url: string;
  category: 'rooms' | 'restaurant' | 'leisure' | 'exterior' | 'events';
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
    // --- Пуаро (Ресторан) ---
    { url: 'puaro/puaro1.png', category: 'restaurant', title: "Інтер'єр ресторану «Пуаро»" },
    { url: 'puaro/puaro2.png', category: 'restaurant', title: "Затишний куточок «Пуаро»" },
    { url: 'puaro/puaro3.png', category: 'restaurant', title: "Деталі інтер'єру" },
    { url: 'puaro/puaro4.png', category: 'restaurant', title: 'Сервірування столу' },
    { url: 'puaro/puaro5.png', category: 'restaurant', title: 'Банкетна зона' },
    { url: 'puaro/puaro6.png', category: 'restaurant', title: 'Атмосфера вечора' },
    { url: 'puaro/puaro7.png', category: 'restaurant', title: 'Зал для гостей' },
    { url: 'puaro/puaro8.png', category: 'restaurant', title: 'Інтер’єр ресторану' },
    { url: 'puaro/summer_terrase.png', category: 'restaurant', title: 'Літня тераса «Пуаро»' },
    { url: 'puaro/summer_altanka.png', category: 'restaurant', title: 'Затишна альтанка' },
    { url: 'puaro/services_puaro.jpg', category: 'restaurant', title: 'Ресторан «Пуаро»' },

    // --- Bellagio (Події) ---
    { url: 'belagio/wedding1.png', category: 'events', title: 'Весілля у «Bellagio»' },
    { url: 'belagio/wedding2.png', category: 'events', title: 'Весільна церемонія' },
    { url: 'belagio/wedding3.png', category: 'events', title: 'Святкове оформлення' },
    { url: 'belagio/wedding4.png', category: 'events', title: 'Щасливі миті' },
    { url: 'belagio/wedding5.png', category: 'events', title: 'Банкетний зал' },
    { url: 'belagio/wedding6.png', category: 'events', title: 'Весільний декор' },
    { url: 'belagio/services_wedding.png', category: 'events', title: 'Організація весіль' },

    { url: 'belagio/conf1.png', category: 'events', title: 'Конференц-зал' },
    { url: 'belagio/conf2.png', category: 'events', title: 'Ділові заходи' },
    { url: 'belagio/conf3.png', category: 'events', title: 'Технічне оснащення' },
    { url: 'belagio/conf4.png', category: 'events', title: 'Семінари та тренінги' },
    { url: 'belagio/services_conf.png', category: 'events', title: 'Бізнес-послуги' },

    { url: 'belagio/corp1.png', category: 'events', title: 'Корпоративне свято' },
    { url: 'belagio/corp2.png', category: 'events', title: 'Командний відпочинок' },
    { url: 'belagio/corp3.png', category: 'events', title: 'Тематична вечірка' },
    { url: 'belagio/corp4.png', category: 'events', title: 'Святковий вечір' },
    { url: 'belagio/corp5.png', category: 'events', title: 'Корпоратив у ресторані' },
    { url: 'belagio/services_corp.png', category: 'events', title: 'Організація корпоративів' },

    { url: 'belagio/family1.png', category: 'events', title: 'Родинне свято' },
    { url: 'belagio/family2.png', category: 'events', title: 'День народження' },
    { url: 'belagio/family3.png', category: 'events', title: 'Дитяче свято' },
    { url: 'belagio/family4.png', category: 'events', title: 'Ювілей у колі рідних' },
    { url: 'belagio/services_family.png', category: 'events', title: 'Сімейні урочистості' },

    { url: 'belagio/concert1.png', category: 'events', title: 'Концертна програма' },
    { url: 'belagio/concert2.png', category: 'events', title: 'Виступ на сцені' },
    { url: 'belagio/concert3.png', category: 'events', title: 'Шоу-програма' },
    { url: 'belagio/services_concert.png', category: 'events', title: 'Музичні заходи' },

    // --- Інші (Rooms, Leisure, Exterior) ---
    { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000', category: 'rooms', title: 'Номер Люкс' },
    { url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1000', category: 'rooms', title: 'Стандарт Твін' },
    { url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1000', category: 'leisure', title: 'Боулінг-клуб' },
    { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000', category: 'leisure', title: 'Зона відпочинку' },
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000', category: 'exterior', title: 'Екстер’єр готелю' },
    { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000', category: 'exterior', title: 'Нічний вигляд' },
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
