import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      id: 'restaurant-poirot',
      title: 'Ресторан «Пуаро»',
      description: 'Європейська, середземноморська та українська кухні у вишуканій атмосфері.',
      longDescription: 'Наш головний ресторан пропонує широкий вибір страв, що задовольнять найвибагливіших гурманів. Ви можете обрати затишний зал, літню терасу або окремі альтанки у нашому парку для приватних зустрічей.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1974',
      features: ['Авторське меню', 'Літня тераса та альтанки', 'Доставка страв', 'Винна карта']
    },
    {
      id: 'leisure-center',
      title: 'Боулінг та розваги',
      description: 'Активний відпочинок у боулінг-клубі «Galactica».',
      longDescription: 'Гості можуть насолодитися грою в боулінг, відвідати тенісний корт, спробувати себе у тирі або відпочити у ресторан-клубі «Bellagio». Для дітей облаштований майданчик з атракціонами та літній басейн.',
      image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=2070',
      features: ['Боулінг «Galactica»', 'Тенісний корт', 'Дитячий майданчик', 'Тир']
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
      id: 'modern-amenities',
      title: 'Сучасний сервіс',
      description: 'Від паркінгу до заправки електромобілів.',
      longDescription: 'Ми забезпечуємо комфорт на кожному етапі подорожі: безкоштовний паркінг під охороною, швидка зарядка для електромобілів, конференц-зала для бізнесу та надійне укриття (бомбосховище) на території.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=2070',
      features: ['Заправка для електромобілів', 'Надійне укриття', 'Конференц-зала', 'Автокемпінг']
    }
  ];
}
