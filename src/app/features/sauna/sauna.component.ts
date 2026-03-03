import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sauna',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './sauna.component.html',
})
export class SaunaComponent {
  amenities = [
    'Парильня (суха пара)',
    'Бочка для охолодження',
    'Затишна кімната відпочинку',
    'Сучасний телевізор',
    'Обладнана кухня',
    'Зручна душова кабіна',
    'Рушники та засоби гігієни',
    'Дубові та березові віники'
  ];

  galleryImages = [
    { url: 'sauna/sauna1.png', alt: 'Інтер’єр сауни' },
    { url: 'sauna/sauna2.png', alt: 'Кімната відпочинку' },
    { url: 'sauna/sauna3.png', alt: 'Парильня' },
    { url: 'sauna/sauna4.png', alt: 'Зона релаксу' }
  ];
}
