import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-family-events',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './family-events.component.html',
})
export class FamilyEventsComponent {
  private translate = inject(TranslateService);

  galleryImages = [
    { url: 'belagio/family1.png', alt: 'Family Event 1' },
    { url: 'belagio/family2.png', alt: 'Family Event 2' },
    { url: 'belagio/family3.png', alt: 'Family Event 3' },
    { url: 'belagio/family4.png', alt: 'Family Event 4' }
  ];

  features = [
    { title: 'family_events.intro.title', desc: 'family_events.intro.description' },
    { title: 'restaurant_bellagio.cards.family', desc: 'restaurant_bellagio.atmosphere.p1' }
  ];
}
