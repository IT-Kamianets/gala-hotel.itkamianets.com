import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant-bellagio',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './restaurant-bellagio.component.html',
})
export class RestaurantBellagioComponent {
  features = [
    {
      title: 'Професійна сцена',
      description: 'Велика сцена, піднята над рівнем підлоги, обладнана кулісами для концертів та виступів.',
      icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
    },
    {
      title: 'Два яруси',
      description: 'Сучасний зал на двох рівнях: перший ярус вміщує 150 осіб, другий — 100 осіб.',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      title: 'Диско-майданчик',
      description: 'Окремий танцювальний майданчик з професійним світловим та звуковим обладнанням.',
      icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z'
    },
    {
      title: 'Технічне оснащення',
      description: 'Сучасні системи освітлення, звуку, відеопроекція та повне покриття Wi-Fi.',
      icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0'
    }
  ];

  events = [
    'Весілля та виїзні церемонії',
    'Корпоративні вечірки',
    'Конференції та семінари',
    'Ювілеї та дні народження',
    'Концерти та творчі вечори',
    'Дитячі свята з аніматорами'
  ];
}
