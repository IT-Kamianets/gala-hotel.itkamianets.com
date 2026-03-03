import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  history = [
    { year: '2002', event: 'Готельно-туристичний комплекс «Гала-Готель» розпочав свою роботу.' },
    { year: '2004', event: 'Відкриття основного корпусу готелю.' },
    { year: '2008', event: 'Розпочав роботу Боулінг-клуб «Галактика» та ресторан «Пуаро».' },
    { year: '2009', event: 'Отримання сертифікату категорії «Три зірки».' },
    { year: '2011', event: 'Входження до списку 100 кращих готелів України.' },
    { year: '2012', event: 'Відкриття ресторан-клубу «Белладжіо».' }
  ];

  roomTypes = [
    { name: 'Стандарт', count: 24, size: '18 м2', capacity: '1-3 особи' },
    { name: 'Стандарт плюс', count: 21, size: '26 м2', capacity: 'до 4 осіб' },
    { name: 'Апартаменти', count: 2, size: 'двокімнатний', capacity: 'до 4 осіб' },
    { name: 'ЕКО', count: 18, size: '-', capacity: 'двоярусні ліжка' },
    { name: 'Економ', count: 3, size: '-', capacity: '1-3 особи' }
  ];

  additionalServices = [
    'Сейф на рецепції',
    'Камера схову',
    'Прання та прасування',
    'Бювет «Нафтуся»',
    'Сауна та Боулінг',
    'Тенісний корт',
    'Дитячий майданчик (80 м2)',
    'Екскурсійне обслуговування'
  ];
}
