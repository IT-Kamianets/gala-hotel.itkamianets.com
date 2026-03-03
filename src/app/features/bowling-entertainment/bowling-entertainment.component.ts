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
      image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'САУНА',
      description: 'Класична сауна для повного релаксу та відновлення сил після насиченого дня.',
      image: 'https://images.unsplash.com/photo-1554133682-67483af07599?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'БЮВЕТ',
      description: 'Власний бювет з мінеральною водою типу «Нафтуся» для здоров’я та оздоровлення наших гостей.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'СПОРТ І ЕКСТРИМ',
      description: 'Для поціновувачів активного драйву: професійний тир та спортивні активності на території комплексу.',
      image: 'https://images.unsplash.com/photo-1511994298241-608e28f14f66?auto=format&fit=crop&q=80&w=800'
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
