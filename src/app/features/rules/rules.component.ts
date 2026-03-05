import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './rules.component.html',
})
export class RulesComponent {
  private translate = inject(TranslateService);

  generalRules = [
    { title: 'rules_page.general.checkin', value: '14:00' },
    { title: 'rules_page.general.checkout', value: '12:00' },
    { title: 'rules_page.general.reception', value: 'rules_page.general.reception_value' }
  ];

  stayRules = [
    'rules_page.stay.cleaning',
    'rules_page.stay.bedding',
    'rules_page.stay.towels',
    'rules_page.stay.responsibility',
    'rules_page.stay.checkout_process',
    'rules_page.stay.parking_luggage'
  ];

  freeServices = [
    'rules_page.free_services.breakfast',
    'rules_page.free_services.parking',
    'rules_page.free_services.luggage',
    'rules_page.free_services.mineral_water'
  ];

  paidServices = [
    'rules_page.paid_services.sauna',
    'rules_page.paid_services.conference',
    'rules_page.paid_services.restaurant',
    'rules_page.paid_services.bowling',
    'rules_page.paid_services.tennis',
    'rules_page.paid_services.playground',
    'rules_page.paid_services.excursions'
  ];

  attractions = [
    { name: 'rules_page.attractions.archery', details: 'rules_page.attractions.details_shots', price: '100 грн', params: { count: 10, bonus: 2 } },
    { name: 'rules_page.attractions.shooting', details: 'rules_page.attractions.details_shots', price: '100 грн', params: { count: 20, bonus: 2 } },
    { name: 'rules_page.attractions.angry_birds', details: 'rules_page.attractions.details_throws', price: '100 грн', params: { count: 10, bonus: 2 } },
    { name: 'rules_page.attractions.darts', details: 'rules_page.attractions.details_throws', price: '100 грн', params: { count: 10, bonus: 2 } },
    { name: 'rules_page.attractions.ring_toss', details: 'rules_page.attractions.details_throws_only', price: '100 грн', params: { count: 10 } },
    { name: 'rules_page.attractions.djinn', details: 'rules_page.attractions.details_time', price: '100 грн', params: { count: 10 } },
    { name: 'rules_page.attractions.trampoline', details: 'rules_page.attractions.details_time', price: '100 грн', params: { count: 10 } },
    { name: 'rules_page.attractions.sumo', details: 'rules_page.attractions.details_time_per_person', price: '100 грн', params: { count: 10 } }
  ];
}
