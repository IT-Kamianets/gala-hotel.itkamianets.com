import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-children-attractions',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './children-attractions.component.html',
})
export class ChildrenAttractionsComponent {
  offers = [
    'Сучасні ігрові зони на свіжому повітрі',
    'Безпечне середовище для активних ігор',
    'Розваги для дітей різного віку',
    'Простір для нових знайомств та дружби',
    'Можливість організації дитячих свят',
    'Затишні зони відпочинку для батьків поруч'
  ];
}
