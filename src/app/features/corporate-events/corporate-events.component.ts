import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-corporate-events',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './corporate-events.component.html',
})
export class CorporateEventsComponent {
  private translate = inject(TranslateService);

  galleryImages = [
    { url: 'belagio/corp1.png', alt: 'Corporate Event 1' },
    { url: 'belagio/corp2.png', alt: 'Corporate Event 2' },
    { url: 'belagio/corp3.png', alt: 'Corporate Event 3' },
    { url: 'belagio/corp4.png', alt: 'Corporate Event 4' },
    { url: 'belagio/corp5.png', alt: 'Corporate Event 5' }
  ];

  details = [
    'corporate_events.details.items.0',
    'corporate_events.details.items.1',
    'corporate_events.details.items.2'
  ];
}
