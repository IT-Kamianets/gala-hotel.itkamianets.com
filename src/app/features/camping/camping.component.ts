import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-camping',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './camping.component.html',
})
export class CampingComponent {
  services = [
    'Довготривала парковка з можливістю проживання',
    'Зручний під’їздний шлях',
    'Парковка під охороною',
    'Можливість підключення до 220V та води',
    'Оренда альтанок та мангал',
    'Заправка електромобілів',
    'Безкоштовний Wi-Fi',
    'Туалет та душ'
  ];

  highlights = [
    {
      title: 'РЕСТОРАН «ПУАРО»',
      description: 'Після жаркого дня можна відпочити в затишному ресторані на території готелю.',
      image: 'puaro/services_puaro.jpg'
    },
    {
      title: 'БОУЛІНГ «GALACTICA»',
      description: 'Активний відпочинок та драйв у єдиному боулінг-клубі міста.',
      image: 'bowling/bowl1.png'
    },
    {
      title: 'ДЛЯ ДІТЕЙ',
      description: 'Дитячий майданчик та різноманітні атракціони для наших маленьких гостей.',
      image: 'child/child1.png'
    }
  ];
}
