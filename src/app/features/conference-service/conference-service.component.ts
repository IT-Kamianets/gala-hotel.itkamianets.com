import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-conference-service',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './conference-service.component.html',
})
export class ConferenceServiceComponent {
  private translate = inject(TranslateService);

  galleryImages = [
    { url: 'conference-service/confserv1.png', alt: 'Conference Hall 1' },
    { url: 'conference-service/confserv2.png', alt: 'Conference Hall 2' },
    { url: 'conference-service/confserv3.png', alt: 'Conference Hall 3' }
  ];

  equipment = [
    'conf_service_page.equipment.items.projector',
    'conf_service_page.equipment.items.screen',
    'conf_service_page.equipment.items.flipchart',
    'conf_service_page.equipment.items.markers',
    'conf_service_page.equipment.items.water',
    'conf_service_page.equipment.items.wifi',
    'conf_service_page.equipment.items.stereo',
    'conf_service_page.equipment.items.microphones'
  ];

  pricing = [
    { hours: 'conf_service_page.pricing.table.1_3', price: '2000 грн./год.' },
    { hours: 'conf_service_page.pricing.table.3_6', price: '1500 грн./год.' },
    { hours: 'conf_service_page.pricing.table.6_plus', price: '1000 грн./год.' }
  ];
}
