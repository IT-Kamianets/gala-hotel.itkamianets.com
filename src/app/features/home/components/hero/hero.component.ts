import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  title = 'Ваш затишний відпочинок у серці Кам’янця-Подільського';
  subtitle = 'Гала Готель — поєднання сучасного комфорту, вишуканої кухні та активного дозвілля для всієї родини.';
}
