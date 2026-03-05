import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-restaurant-bellagio',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './restaurant-bellagio.component.html',
})
export class RestaurantBellagioComponent {
  private translate = inject(TranslateService);

  services = [
    { title: 'restaurant_bellagio.cards.wedding', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', link: '/bellagio-wedding', color: 'bg-rose-500' },
    { title: 'restaurant_bellagio.cards.conference', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', link: '/bellagio-conference', color: 'bg-blue-600' },
    { title: 'restaurant_bellagio.cards.family', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', link: '/family-events', color: 'bg-amber-500' },
    { title: 'restaurant_bellagio.cards.corporate', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z', link: '/corporate-events', color: 'bg-emerald-600' },
    { title: 'restaurant_bellagio.cards.concerts', icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3', link: '/concerts', color: 'bg-purple-600' }
  ];

  galleryImages = [
    { url: 'belagio/wedding1.png', alt: 'Bellagio Event 1' },
    { url: 'belagio/conf1.png', alt: 'Bellagio Event 2' },
    { url: 'belagio/family1.png', alt: 'Bellagio Event 3' },
    { url: 'belagio/corp1.png', alt: 'Bellagio Event 4' },
    { url: 'belagio/concert1.png', alt: 'Bellagio Event 5' }
  ];

  offers = [
    'restaurant_bellagio.offers.0',
    'restaurant_bellagio.offers.1',
    'restaurant_bellagio.offers.2',
    'restaurant_bellagio.offers.3',
    'restaurant_bellagio.offers.4',
    'restaurant_bellagio.offers.5'
  ];
}
