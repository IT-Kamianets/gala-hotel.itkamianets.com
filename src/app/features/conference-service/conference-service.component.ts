import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-conference-service',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './conference-service.component.html',
})
export class ConferenceServiceComponent {
  equipment = [
    'Мультимедійний проектор',
    'Стерео система (акустична система)',
    'Вмонтований проекційний екран',
    'Фліпчартова дошка з маркерами',
    'Мікрофон',
    'Кондиціонер',
    'Безпровідний Інтернет (Wi-Fi)'
  ];

  pricing = [
    { hours: '1-6 години', price: '500 грн/год' },
    { hours: 'від 6 годин', price: '450 грн/год' }
  ];

  galleryImages = [
    { url: 'conference-service/confserv1.png', alt: 'Конференц-зала Gala Hotel 1' },
    { url: 'conference-service/confserv2.png', alt: 'Конференц-зала Gala Hotel 2' },
    { url: 'conference-service/confserv3.png', alt: 'Конференц-зала Gala Hotel 3' }
  ];
}
