import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sauna',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './sauna.component.html',
})
export class SaunaComponent {
  private translate = inject(TranslateService);

  galleryImages = [
    { url: 'sauna/sauna1.png', alt: 'Sauna 1' },
    { url: 'sauna/sauna2.png', alt: 'Sauna 2' },
    { url: 'sauna/sauna3.png', alt: 'Sauna 3' },
    { url: 'sauna/sauna4.png', alt: 'Sauna 4' },
    { url: 'sauna/sauna5.png', alt: 'Sauna 5' },
    { url: 'sauna/sauna6.png', alt: 'Sauna 6' },
    { url: 'sauna/sauna7.png', alt: 'Sauna 7' },
    { url: 'sauna/sauna8.png', alt: 'Sauna 8' },
    { url: 'sauna/sauna9.png', alt: 'Sauna 9' }
  ];

  amenities = [
    'sauna_page.comfort.amenities.0',
    'sauna_page.comfort.amenities.1',
    'sauna_page.comfort.amenities.2',
    'sauna_page.comfort.amenities.3',
    'sauna_page.comfort.amenities.4',
    'sauna_page.comfort.amenities.5',
    'sauna_page.comfort.amenities.6',
    'sauna_page.comfort.amenities.7'
  ];
}
