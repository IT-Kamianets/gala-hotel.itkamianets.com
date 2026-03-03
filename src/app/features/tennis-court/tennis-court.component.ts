import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tennis-court',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './tennis-court.component.html',
})
export class TennisCourtComponent {
  features = [
    { 
      title: 'Професійне покриття', 
      desc: 'Якісний корт, що підходить як для аматорських ігор, так і для підготовки до змагань.' 
    },
    { 
      title: 'Школа тенісу', 
      desc: 'Запрошуємо дорослих та дітей у школу великого тенісу «ГАЛА ТЕНІС».' 
    },
    { 
      title: 'Оренда спорядження', 
      desc: 'Можливість оренди професійних ракеток для комфортної гри.' 
    },
    { 
      title: 'Зручний графік', 
      desc: 'Корт доступний для гри з самого ранку до пізнього вечора (08:00-22:00).' 
    }
  ];

  pricing = {
    court: '300 грн/год',
    racket: '50 грн/год'
  };
}
