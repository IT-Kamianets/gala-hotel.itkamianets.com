import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mineral-water',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './mineral-water.component.html',
})
export class MineralWaterComponent {
  chemicalComposition = [
    { name: 'Гідрокарбонати', value: '450-620' },
    { name: 'Сульфати', value: '260-460' },
    { name: 'Хлориди', value: '<160' },
    { name: 'Кальцій', value: '180-300' },
    { name: 'Магній', value: '60-180' },
    { name: 'Натрій і калій', value: '<180' }
  ];

  therapeuticEffects = [
    'Сечогінний ефект, видалення дрібних конкрементів та піску',
    'Активізація жовчоутворення та жовчовиділення',
    'Сприяння виділенню радіонуклідів з організму',
    'Протизапальна та дезінтоксикаційна дія',
    'Закріплення ефекту медикаментозної терапії',
    'Продовження періоду ремісії захворювань'
  ];
}
