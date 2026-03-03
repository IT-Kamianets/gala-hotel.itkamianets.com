import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

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
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      id: 'restaurant-poirot',
      title: 'Ресторан «Пуаро»',
      description: 'Європейська, середземноморська та українська кухні у вишуканій атмосфері.',
      longDescription: 'Наш головний ресторан пропонує широкий вибір страв, що задовольнять найвибагливіших гурманів. Ви можете обрати затишний зал, літню терасу або окремі альтанки у нашому парку для приватних зустрічей.',
      image: 'puaro/services_puaro.jpg',
      features: ['Авторське меню', 'Літня тераса та альтанки', 'Доставка страв', 'Винна карта']
    },
    {
      id: 'leisure-center',
      title: 'Відпочинок та розваги',
      description: 'Різноманіття можливостей для активного дозвілля та релаксу.',
      longDescription: 'Ми пропонуємо нашим гостям цілий світ розваг на території 1.2 га. Від драйву боулінг-клубу «Galactica» та тенісного корту до оздоровлення в сауні чи біля власного бювету з мінеральною водою.',
      image: 'bowling/bowl1.png',
      features: ['Боулінг та Теніс', 'Автокемпінг', 'Сауна та Бювет', 'Дитячі атракціони']
    },
    {
      id: 'restaurant-bellagio',
      title: 'Ресторан-клуб «Bellagio»',
      description: 'Вишуканий відпочинок та розваги у затишній атмосфері.',
      longDescription: 'Ресторан-клуб «Bellagio» — це ідеальне місце для тих, хто цінує якісний відпочинок, смачну кухню та приємну атмосферу. Тут ви можете провести незабутній вечір, насолоджуючись вишуканими напоями та стравами.',
      image: 'belagio/wedding5.png',
      features: ['Вишукане меню', 'Барна карта', 'Затишна атмосфера', 'Музичний супровід']
    },
    {
      id: 'conference-service',
      title: 'Конференц-Сервіс',
      description: 'Професійна конференц-зала для ділових заходів до 80 осіб.',
      longDescription: 'Наша конференц-зала площею 100 м² оснащена сучасним мультимедійним обладнанням. Ідеально підходить для семінарів, тренінгів та презентацій з можливістю організації кава-брейків.',
      image: 'conference-service/confserv1.png',
      features: ['Проектор та екран', 'Стерео система', 'Wi-Fi', 'Кава-брейки']
    }
    ];
    }
