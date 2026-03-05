import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent {
  private translate = inject(TranslateService);

  galleryImages = [
    { url: 'puaro/puaro1.png', alt: 'Poirot Restaurant 1' },
    { url: 'puaro/puaro2.png', alt: 'Poirot Restaurant 2' },
    { url: 'puaro/puaro3.png', alt: 'Poirot Restaurant 3' },
    { url: 'puaro/puaro4.png', alt: 'Poirot Restaurant 4' },
    { url: 'puaro/puaro5.png', alt: 'Poirot Restaurant 5' },
    { url: 'puaro/puaro6.png', alt: 'Poirot Restaurant 6' }
  ];

  halls = [
    { 
      name: 'restaurant.halls.main.name', 
      capacity: 'restaurant.halls.main.capacity', 
      description: 'restaurant.halls.main.description',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      features: ['restaurant.halls.main.features.0', 'restaurant.halls.main.features.1', 'restaurant.halls.main.features.2']
    },
    { 
      name: 'restaurant.halls.vip.name', 
      capacity: 'restaurant.halls.vip.capacity', 
      description: 'restaurant.halls.vip.description',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      features: ['restaurant.halls.vip.features.0', 'restaurant.halls.vip.features.1', 'restaurant.halls.vip.features.2']
    },
    { 
      name: 'restaurant.halls.banquet.name', 
      capacity: 'restaurant.halls.banquet.capacity', 
      description: 'restaurant.halls.banquet.description',
      icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9V9a2 2 0 00-2-2H8a2 2 0 00-2 2v3h12z',
      features: ['restaurant.halls.banquet.features.0', 'restaurant.halls.banquet.features.1', 'restaurant.halls.banquet.features.2']
    }
  ];

  summerAreas = [
    {
      name: 'restaurant.summer.terrace.name',
      capacity: 'restaurant.summer.terrace.capacity',
      description: 'restaurant.summer.terrace.description',
      image: 'puaro/summer_terrase.png'
    },
    {
      name: 'restaurant.summer.gazebo.name',
      capacity: 'restaurant.summer.gazebo.capacity',
      description: 'restaurant.summer.gazebo.description',
      image: 'puaro/summer_altanka.png'
    }
  ];
}
