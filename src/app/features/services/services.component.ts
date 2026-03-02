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
      title: 'Боулінг та розваги',
      description: 'Активний відпочинок у боулінг-клубі «Galactica».',
      longDescription: 'Гості можуть насолодитися грою в боулінг, відвідати тенісний корт або спробувати себе у тирі. Для дітей облаштований майданчик з атракціонами та літній басейн.',
      image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=2070',
      features: ['Боулінг «Galactica»', 'Тенісний корт', 'Дитячий майданчик', 'Тир']
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
      id: 'health-wellbeing',
      title: 'Оздоровлення та релакс',
      description: 'Власний бювет з мінеральною водою та сауна.',
      longDescription: 'Тільки у нашому готелі ви можете скористатися бюветом з мінеральною водою типу «Нафтуся». Також до ваших послуг професійна сауна для повного розслаблення після насиченого дня.',
      image: 'https://images.unsplash.com/photo-1554133682-67483af07599?auto=format&fit=crop&q=80&w=2070',
      features: ['Бювет «Нафтуся»', 'Класична сауна', 'Власний парк', 'Тиша та свіже повітря']
    },
    {
      id: 'conference-service',
      title: 'Конференц-Сервіс',
      description: 'Професійна конференц-зала для ділових заходів до 80 осіб.',
      longDescription: 'Наша конференц-зала площею 100 м² оснащена сучасним мультимедійним обладнанням. Ідеально підходить для семінарів, тренінгів та презентацій з можливістю організації кава-брейків.',
      image: 'conference-service/confserv1.png',
      features: ['Проектор та екран', 'Стерео система', 'Wi-Fi', 'Кава-брейки']
    },
    {
      id: 'modern-amenities',
      title: 'Сучасний сервіс',
      description: 'Від паркінгу до заправки електромобілів.',
      longDescription: 'Ми забезпечуємо комфорт на кожному етапі подорожі: безкоштовний паркінг під охороною, швидка зарядка для електромобілів, конференц-зала для бізнесу та надійне укриття (бомбосховище) на території.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=2070',
      features: ['Заправка для електромобілів', 'Надійне укриття', 'Конференц-зала', 'Автокемпінг']
    }
  ];
}
