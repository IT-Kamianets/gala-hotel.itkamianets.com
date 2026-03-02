import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-hero.component.html',
})
export class PageHeroComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
