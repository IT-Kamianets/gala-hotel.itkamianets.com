import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-bowling',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './bowling.component.html',
})
export class BowlingComponent {
  priceList = [
    { 
      days: 'Понеділок – Четвер', 
      slots: [
        { hours: '14:00 – 18:00', price: '470 грн. / год' },
        { hours: '18:00 – 02:00', price: '520 грн. / год' }
      ]
    },
    { 
      days: 'П’ятниця', 
      slots: [
        { hours: '14:00 – 18:00', price: '490 грн. / год' },
        { hours: '18:00 – 02:00', price: '540 грн. / год' }
      ]
    },
    { 
      days: 'Субота – Неділя', 
      slots: [
        { hours: '10:00 – 18:00', price: '510 грн. / год' },
        { hours: '18:00 – 02:00', price: '570 грн. / год' }
      ]
    }
  ];

  workingHours = {
    weekdays: '14:00 – 23:00',
    weekends: '10:00 – 23:00'
  };

  rules = [
    'bowling_page.service.rules.0',
    'bowling_page.service.rules.1',
    'bowling_page.service.rules.2',
    'bowling_page.service.rules.3',
    'bowling_page.features.kids.description',
    'bowling_page.pricing.note'
  ];
}
