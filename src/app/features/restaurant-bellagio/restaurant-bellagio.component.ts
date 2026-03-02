import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

interface HighlightCard {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-restaurant-bellagio',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './restaurant-bellagio.component.html',
})
export class RestaurantBellagioComponent {
  highlightCards: HighlightCard[] = [
    {
      title: 'ВЕСІЛЛЯ',
      description: 'Двоярусний сучасний банкетний зал на 250 осіб (перший ярус — 150 осіб, другий ярус — 100 осіб).',
      image: 'belagio/services_wedding.png'
    },
    {
      title: 'КОНФЕРЕНЦІЇ',
      description: 'Ділові зустрічі, фуршетний та музичний супровід, відео та фото обладнання, Wi-Fi.',
      image: 'belagio/services_conf.png'
    },
    {
      title: 'СІМЕЙНІ СВЯТА',
      description: 'Дні народження, ювілеї, хрестини. Ведучі, музиканти, шоу-програми, аніматори, «Candy bar».',
      image: 'belagio/services_family.png'
    },
    {
      title: 'КОРПОРАТИВИ',
      description: 'Тібілдинги з музикою, ведучими та цікавими конкурсами для вашої команди.',
      image: 'belagio/services_corp.png'
    },
    {
      title: 'КОНЦЕРТИ',
      description: 'Зал театрального типу з великою піднятою сценою, кулісами та професійним світлом і звуком.',
      image: 'belagio/services_concert.png'
    }
  ];

  offers = [
    'Весілля та виїзні церемонії в парку готелю «Гала»',
    'Корпоративні заходи за доступними цінами',
    'Проведення конференцій, семінарів та професійних тренінгів',
    'Сімейні свята: ювілеї, хрестини, заручини',
    'Дискотеки та тематичні вечірки з DJ',
    'Концерти — професійна сцена та обладнання для артистів'
  ];
}
