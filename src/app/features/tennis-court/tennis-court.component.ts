import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tennis-court',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './tennis-court.component.html',
})
export class TennisCourtComponent {
  private translate = inject(TranslateService);

  pricing = [
    { title: 'tennis_court.rules.rent_court', price: '300 грн./год.' },
    { title: 'tennis_court.rules.rent_racket', price: '100 грн.' }
  ];

  galleryImages = [
    { url: 'sport/tenis.png', alt: 'Gala Tennis Court' },
    { url: 'tenis/tenis1.png', alt: 'Tennis training' }
  ];
}
