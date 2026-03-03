import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

interface ActivityCard {
  title: string;
  description: string;
  image: string;
  phone: string;
}

@Component({
  selector: 'app-sport-extreme',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './sport-extreme.component.html',
})
export class SportExtremeComponent {
  reasons = [
    'Центр фестивального життя: військово-історичні реконструкції та Ретрофест',
    'Всеукраїнський фестиваль пива і повітроплавання (жовтень)',
    'Унікальні історичні пам’ятки: Старий замок та Турецький міст',
    'Мальовничі каньйони річок Смотрич та Дністер',
    'Печера «Атлантида» — друга за красою гіпсова печера в Європі',
    'Затоплене місто Бакота та скельно-печерний монастир',
    'Національний парк «Подільські Товтри»'
  ];

  activities: ActivityCard[] = [
    {
      title: 'БІГ У ПАРКОВІЙ ЗОНІ',
      description: 'Велика паркова зона поблизу Gala Hotel ідеально підходить для ранкових пробіжок, які покращують здоров’я та настрій.',
      image: 'sport/park.png',
      phone: '+38 067 381 18 69'
    },
    {
      title: 'МІНІ ФУТБОЛЬНЕ ПОЛЕ',
      description: 'Поле зі штучною травою (30*15м) для футболу та баскетболу. Поруч розташовані вуличні тренажери.',
      image: 'sport/football.png',
      phone: '+38 067 381 18 69'
    },
    {
      title: 'ВЕЛИКИЙ ТЕНІС',
      description: 'Професійний корт для підтримки тонусу, розвитку реакції та стратегічного мислення.',
      image: 'sport/tenis.png',
      phone: '+38 067 381 18 69'
    },
    {
      title: 'СПЛАВ НА БАЙДАРКАХ',
      description: 'Незабутні мандрівки річками Смотрич, Дністер, Збруч та Жванчик. Повний похідний інвентар та частування.',
      image: 'sport/baydarka.png',
      phone: '+38 067 381 19 69'
    },
    {
      title: 'КАТЕР ТА ТЕПЛОХІД',
      description: 'Прогулянки вздовж каньйонів, риболовля, водні лижі, вейкбординг та підводне полювання.',
      image: 'sport/boat.png',
      phone: '+38 067 381 19 69'
    },
    {
      title: 'ЕКСТРИМ НА БРДМ',
      description: 'Поїздки на модернізованій військовій техніці через болота та пагорби. Справжній драйв для компанії!',
      image: 'sport/brdm.png',
      phone: '+38 067 381 19 69'
    }
  ];
}
