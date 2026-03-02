import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

interface WeddingGift {
  title: string;
  icon: string;
}

interface WeddingService {
  title: string;
  desc: string;
  items: string[];
}

@Component({
  selector: 'app-bellagio-wedding',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './bellagio-wedding.component.html',
})
export class BellagioWeddingComponent {
  gifts: WeddingGift[] = [
    { title: 'Номер для молодят', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { title: 'Весільна арка', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { title: 'Локація для фотосесії', icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z' }
  ];

  galleryImages = [
    { url: 'belagio/wedding1.png', alt: 'Весілля у Белладжіо 1' },
    { url: 'belagio/wedding2.png', alt: 'Весілля у Белладжіо 2' },
    { url: 'belagio/wedding3.png', alt: 'Весілля у Белладжіо 3' },
    { url: 'belagio/wedding4.png', alt: 'Весілля у Белладжіо 4' },
    { url: 'belagio/wedding5.png', alt: 'Весілля у Белладжіо 5' },
    { url: 'belagio/wedding6.png', alt: 'Весілля у Белладжіо 6' }
  ];

  services: WeddingService[] = [
    {
      title: 'Локація та Сервіс',
      desc: 'Ми забезпечуємо повний комфорт для вас та ваших гостей.',
      items: [
        'Окремий зал з власним входом',
        'Виїзна церемонія на території готелю',
        'Проживання гостей зі знижкою 10%',
        'Безкоштовна оренда залу',
        'Охоронювана парковка'
      ]
    },
    {
      title: 'Меню та Напої',
      desc: 'Найкращі страви української та європейської кухонь.',
      items: [
        'Банкетне меню від 800 грн/особа',
        'Власні напої та фрукти (без доплат)',
        'Замовлення алкоголю за оптовими цінами',
        'Професійні кондитери (торти на замовлення)',
        'Організація вишуканого Candy bar'
      ]
    },
    {
      title: 'Шоу та Декор',
      desc: 'Створимо атмосферу казки та драйву.',
      items: [
        'Ведучі, музиканти та DJ',
        'Лазерне диско-шоу',
        'Професійні флористи та декоратори',
        'Партнерство з агенцією «ZeFir»',
        'Повний технічний супровід'
      ]
    }
  ];
}
