import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

interface Hall {
  name: string;
  capacity: string;
  description: string;
  image: string;
  icon?: string;
  features?: string[];
}

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent {
  halls: Hall[] = [
    {
      name: 'Основний зал',
      capacity: 'до 80 осіб',
      description: 'Чудово підійде для святкування Дня Народження, корпоративу, вечері з друзями, Хрестин чи романтичних вечерь.',
      image: '', // No photo available
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      features: ['Затишна атмосфера', 'Музичний супровід', 'Професійне обслуговування']
    },
    {
      name: 'VIP зал',
      capacity: 'до 30 осіб',
      description: 'Виконаний в італійському стилі, цей зал ідеально підходить для приватних святкувань, фуршетів та ділових зустрічей.',
      image: '', // No photo available
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      features: ['Італійський стиль', 'Приватність', 'Ідеально для переговорів']
    },
    {
      name: 'Банкетний зал',
      capacity: 'до 40 осіб',
      description: 'Світлий та просторий зал, який стане чудовим місцем для ваших родинних свят та весіль.',
      image: '', // No photo available
      icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.904 2.904 0 01-3 0 2.903 2.903 0 01-3 0 2.903 2.903 0 01-3 0 2.903 2.903 0 01-3 0 2.904 2.904 0 01-1.5-.454V6.454C6.523 6.151 7.046 6 7.5 6s1.046.151 1.5.454a2.904 2.904 0 003 0 2.904 2.904 0 003 0 2.904 2.904 0 003 0c.454-.303.977-.454 1.5-.454V15.546z',
      features: ["Світлий інтер'єр", "Святкове оформлення", "Простір для танців"]
    }
  ];

  galleryImages = [
    { url: 'puaro/puaro1.png', alt: 'Інтер\'єр ресторану Пуаро 1' },
    { url: 'puaro/puaro2.png', alt: 'Інтер\'єр ресторану Пуаро 2' },
    { url: 'puaro/puaro3.png', alt: 'Інтер\'єр ресторану Пуаро 3' },
    { url: 'puaro/puaro4.png', alt: 'Інтер\'єр ресторану Пуаро 4' },
    { url: 'puaro/puaro5.png', alt: 'Інтер\'єр ресторану Пуаро 5' },
    { url: 'puaro/puaro6.png', alt: 'Інтер\'єр ресторану Пуаро 6' },
    { url: 'puaro/puaro7.png', alt: 'Інтер\'єр ресторану Пуаро 7' },
    { url: 'puaro/puaro8.png', alt: 'Інтер\'єр ресторану Пуаро 8' }
  ];

  summerAreas: Hall[] = [
    {
      name: 'Літня тераса',
      capacity: '70-100 осіб',
      description: 'Підходить для бенкетів (70 осіб), фуршетів (до 100 осіб), а також для обідів та перегляду спортивних трансляцій.',
      image: 'puaro/summer_terrase.png'
    },
    {
      name: 'Літня альтанка',
      capacity: 'до 30 осіб',
      description: 'Затишне місце для святкування Дня Народження, ювілеїв, Хрестин та фуршетів на свіжому повітрі.',
      image: 'puaro/summer_altanka.png'
    }
  ];
}
