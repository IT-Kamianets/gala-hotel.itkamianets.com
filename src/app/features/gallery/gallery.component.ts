import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface GalleryItem {
  url: string;
  category: 'rooms' | 'restaurant' | 'leisure' | 'exterior' | 'events';
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, TranslateModule],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  private translate = inject(TranslateService);
  activeFilter: string = 'all';
  selectedIndex: number | null = null;

  images: GalleryItem[] = [
    // --- Пуаро (Ресторан) ---
    { url: 'puaro/puaro1.png', category: 'restaurant', title: 'gallery.items.puaro_interior' },
    { url: 'puaro/puaro2.png', category: 'restaurant', title: 'gallery.items.puaro_corner' },
    { url: 'puaro/puaro3.png', category: 'restaurant', title: 'gallery.items.puaro_details' },
    { url: 'puaro/puaro4.png', category: 'restaurant', title: 'gallery.items.puaro_serving' },
    { url: 'puaro/puaro5.png', category: 'restaurant', title: 'gallery.items.puaro_banquet' },
    { url: 'puaro/puaro6.png', category: 'restaurant', title: 'gallery.items.puaro_atmosphere' },
    { url: 'puaro/puaro7.png', category: 'restaurant', title: 'gallery.items.puaro_hall' },
    { url: 'puaro/puaro8.png', category: 'restaurant', title: 'gallery.items.puaro_interior_2' },
    { url: 'puaro/summer_terrase.png', category: 'restaurant', title: 'gallery.items.puaro_terrace' },
    { url: 'puaro/summer_altanka.png', category: 'restaurant', title: 'gallery.items.puaro_gazebo' },
    { url: 'puaro/services_puaro.jpg', category: 'restaurant', title: 'gallery.items.puaro_main' },

    // --- Bellagio (Події) ---
    { url: 'belagio/wedding1.png', category: 'events', title: 'gallery.items.bellagio_wedding_1' },
    { url: 'belagio/wedding2.png', category: 'events', title: 'gallery.items.bellagio_wedding_2' },
    { url: 'belagio/wedding3.png', category: 'events', title: 'gallery.items.bellagio_wedding_3' },
    { url: 'belagio/wedding4.png', category: 'events', title: 'gallery.items.bellagio_wedding_4' },
    { url: 'belagio/wedding5.png', category: 'events', title: 'gallery.items.bellagio_wedding_5' },
    { url: 'belagio/wedding6.png', category: 'events', title: 'gallery.items.bellagio_wedding_6' },
    { url: 'belagio/services_wedding.png', category: 'events', title: 'gallery.items.bellagio_wedding_org' },

    { url: 'belagio/conf1.png', category: 'events', title: 'gallery.items.bellagio_conf_1' },
    { url: 'belagio/conf2.png', category: 'events', title: 'gallery.items.bellagio_conf_2' },
    { url: 'belagio/conf3.png', category: 'events', title: 'gallery.items.bellagio_conf_3' },
    { url: 'belagio/conf4.png', category: 'events', title: 'gallery.items.bellagio_conf_4' },
    { url: 'belagio/services_conf.png', category: 'events', title: 'gallery.items.bellagio_conf_biz' },

    { url: 'belagio/corp1.png', category: 'events', title: 'gallery.items.bellagio_corp_1' },
    { url: 'belagio/corp2.png', category: 'events', title: 'gallery.items.bellagio_corp_2' },
    { url: 'belagio/corp3.png', category: 'events', title: 'gallery.items.bellagio_corp_3' },
    { url: 'belagio/corp4.png', category: 'events', title: 'gallery.items.bellagio_corp_4' },
    { url: 'belagio/corp5.png', category: 'events', title: 'gallery.items.bellagio_corp_5' },
    { url: 'belagio/services_corp.png', category: 'events', title: 'gallery.items.bellagio_corp_org' },

    { url: 'belagio/family1.png', category: 'events', title: 'gallery.items.bellagio_family_1' },
    { url: 'belagio/family2.png', category: 'events', title: 'gallery.items.bellagio_family_2' },
    { url: 'belagio/family3.png', category: 'events', title: 'gallery.items.bellagio_family_3' },
    { url: 'belagio/family4.png', category: 'events', title: 'gallery.items.bellagio_family_4' },
    { url: 'belagio/services_family.png', category: 'events', title: 'gallery.items.bellagio_family_org' },

    { url: 'belagio/concert1.png', category: 'events', title: 'gallery.items.bellagio_concert_1' },
    { url: 'belagio/concert2.png', category: 'events', title: 'gallery.items.bellagio_concert_2' },
    { url: 'belagio/concert3.png', category: 'events', title: 'gallery.items.bellagio_concert_3' },
    { url: 'belagio/services_concert.png', category: 'events', title: 'gallery.items.bellagio_concert_org' },

    // --- Загальна галерея (Територія та відпочинок) ---
    { url: 'gallery/1.png', category: 'exterior', title: 'gallery.items.hotel_gala_1' },
    { url: 'gallery/2.png', category: 'exterior', title: 'gallery.items.hotel_gala_2' },
    { url: 'gallery/3.png', category: 'exterior', title: 'gallery.items.hotel_gala_3' },
    { url: 'gallery/4.png', category: 'exterior', title: 'gallery.items.hotel_gala_4' },
    { url: 'gallery/5.png', category: 'exterior', title: 'gallery.items.hotel_gala_5' },
    { url: 'gallery/6.png', category: 'exterior', title: 'gallery.items.hotel_gala_6' },
    { url: 'gallery/7.png', category: 'exterior', title: 'gallery.items.hotel_gala_7' },
    { url: 'gallery/8.png', category: 'exterior', title: 'gallery.items.hotel_gala_8' },
    { url: 'gallery/9.png', category: 'exterior', title: 'gallery.items.hotel_gala_9' },
    { url: 'gallery/10.png', category: 'exterior', title: 'gallery.items.hotel_gala_10' },
    { url: 'gallery/11.png', category: 'exterior', title: 'gallery.items.hotel_gala_11' },
    { url: 'gallery/12.png', category: 'exterior', title: 'gallery.items.hotel_gala_12' },
    { url: 'gallery/13.png', category: 'exterior', title: 'gallery.items.hotel_gala_13' },
    { url: 'gallery/14.png', category: 'exterior', title: 'gallery.items.hotel_gala_14' },
    { url: 'gallery/15.png', category: 'exterior', title: 'gallery.items.hotel_gala_15' },
    { url: 'gallery/16.png', category: 'exterior', title: 'gallery.items.hotel_gala_16' },
    { url: 'gallery/17.png', category: 'exterior', title: 'gallery.items.hotel_gala_17' },
    { url: 'gallery/18.png', category: 'exterior', title: 'gallery.items.hotel_gala_18' },
    { url: 'gallery/19.png', category: 'exterior', title: 'gallery.items.hotel_gala_19' },
    { url: 'gallery/20.png', category: 'exterior', title: 'gallery.items.hotel_gala_20' },
    { url: 'gallery/21.png', category: 'exterior', title: 'gallery.items.hotel_gala_21' },
    { url: 'gallery/22.png', category: 'exterior', title: 'gallery.items.hotel_gala_22' },

    // --- Інші (Rooms, Leisure, Exterior) ---
    { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000', category: 'rooms', title: 'gallery.items.deluxe_room' },
    { url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1000', category: 'rooms', title: 'gallery.items.standard_twin' },
    { url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1000', category: 'leisure', title: 'gallery.items.bowling_club' },
    { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000', category: 'leisure', title: 'gallery.items.leisure_zone' },
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000', category: 'exterior', title: 'gallery.items.hotel_exterior' },
    { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000', category: 'exterior', title: 'gallery.items.night_view' },
  ];

  get filteredImages() {
    return this.activeFilter === 'all' 
      ? this.images 
      : this.images.filter(img => img.category === this.activeFilter);
  }

  get selectedImage(): GalleryItem | null {
    if (this.selectedIndex === null) return null;
    return this.filteredImages[this.selectedIndex];
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.closeImage();
  }

  openImage(index: number) {
    this.selectedIndex = index;
    document.body.style.overflow = 'hidden';
  }

  closeImage() {
    this.selectedIndex = null;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex + 1) % this.filteredImages.length;
    }
  }

  prevImage() {
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.selectedIndex === null) return;
    
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'Escape') this.closeImage();
  }
}
