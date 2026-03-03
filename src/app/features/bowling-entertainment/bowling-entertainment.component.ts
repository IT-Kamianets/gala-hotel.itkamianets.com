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
  selector: 'app-bowling-entertainment',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './bowling-entertainment.component.html',
})
export class BowlingEntertainmentComponent {
  highlightCards: HighlightCard[] = [
    {
      title: 'БОУЛІНГ',
      description: 'Боулінг-клуб «Galactica» пропонує 4 професійні доріжки, сучасне обладнання та комфортну зону відпочинку.',
      image: 'bowling/bowl1.png'
    },
    {
      title: 'ТЕНІСНИЙ КОРТ',
      description: 'Професійний тенісний корт з якісним покриттям для активного відпочинку та тренувань.',
      image: 'tenis/tenis1.png'
    },
    {
      title: 'ДИЯЧИЙ МАЙДАНЧИК',
      description: 'Сучасна ігрова зона на свіжому повітрі з атракціонами для безпечного та веселого дозвілля дітей.',
      image: 'child/child1.png'
    },
    {
      title: 'АВТОКЕМПІНГ',
      description: 'Сучасний автокемпінг з усіма необхідними зручностями для комфортної зупинки мандрівників на колесах.',
      image: 'camping/camping1.png'
    },
    {
      title: 'САУНА',
      description: 'Класична сауна для повного релаксу та відновлення сил після насиченого дня.',
      image: 'sauna/sauna1.png'
    },
    {
      title: 'БЮВЕТ',
      description: 'Власний бювет з мінеральною водою типу «Нафтуся» для здоров’я та оздоровлення наших гостей.',
      image: 'water/water1.png'
    },
    {
      title: 'СПОРТ І ЕКСТРИМ',
      description: 'Для поціновувачів активного драйву: професійний тир та спортивні активності на території комплексу.',
      image: 'sport/baydarka.png'
    }
  ];

  offers = [
    '4 професійні доріжки для боулінгу',
    'Оренда тенісного корту та інвентаря',
    'Професійний тир для перевірки влучності',
    'Дитячий майданчик з безпечним покриттям',
    'Організація дитячих днів народжень',
    'Корпоративні турніри з боулінгу'
  ];
}
