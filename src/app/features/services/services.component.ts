import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      id: 'restaurant-poirot',
      title: 'services_page.items.restaurant_poirot.title',
      description: 'services_page.items.restaurant_poirot.description',
      longDescription: 'services_page.items.restaurant_poirot.longDescription',
      image: 'puaro/services_puaro.jpg',
      features: [
        'services_page.items.restaurant_poirot.features.menu', 
        'services_page.items.restaurant_poirot.features.terrace', 
        'services_page.items.restaurant_poirot.features.delivery', 
        'services_page.items.restaurant_poirot.features.wine'
      ]
    },
    {
      id: 'leisure-center',
      title: 'services_page.items.leisure_center.title',
      description: 'services_page.items.leisure_center.description',
      longDescription: 'services_page.items.leisure_center.longDescription',
      image: 'bowling/bowl1.png',
      features: [
        'services_page.items.leisure_center.features.bowling_tennis', 
        'services_page.items.leisure_center.features.camping', 
        'services_page.items.leisure_center.features.sauna_well', 
        'services_page.items.leisure_center.features.child_attr'
      ]
    },
    {
      id: 'restaurant-bellagio',
      title: 'services_page.items.restaurant_bellagio.title',
      description: 'services_page.items.restaurant_bellagio.description',
      longDescription: 'services_page.items.restaurant_bellagio.longDescription',
      image: 'belagio/wedding5.png',
      features: [
        'services_page.items.restaurant_bellagio.features.menu', 
        'services_page.items.restaurant_bellagio.features.bar', 
        'services_page.items.restaurant_bellagio.features.atmosphere', 
        'services_page.items.restaurant_bellagio.features.music'
      ]
    },
    {
      id: 'conference-service',
      title: 'services_page.items.conference_service.title',
      description: 'services_page.items.conference_service.description',
      longDescription: 'services_page.items.conference_service.longDescription',
      image: 'conference-service/confserv1.png',
      features: [
        'services_page.items.conference_service.features.equipment', 
        'services_page.items.conference_service.features.stereo', 
        'services_page.items.conference_service.features.wifi', 
        'services_page.items.conference_service.features.coffee'
      ]
    }
  ];
}
