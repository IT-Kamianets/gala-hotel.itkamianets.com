import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface HighlightCard {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-bowling-entertainment',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './bowling-entertainment.component.html',
})
export class BowlingEntertainmentComponent {
  highlightCards: HighlightCard[] = [
    {
      title: 'footer.service_bowling',
      description: 'bowling_page.hero.description',
      image: 'bowling/bowl1.png'
    },
    {
      title: 'footer.service_tennis',
      description: 'leisure_page.galactica.description',
      image: 'tenis/tenis1.png'
    },
    {
      title: 'gallery.categories.leisure',
      description: 'about.services.items.playground',
      image: 'child/child1.png'
    },
    {
      title: 'services_page.items.leisure_center.features.camping',
      description: 'camping_page.hero.description',
      image: 'camping/camping1.png'
    },
    {
      title: 'footer.service_sauna',
      description: 'rules_page.paid_services.sauna',
      image: 'sauna/sauna1.png'
    },
    {
      title: 'footer.service_mineral_water',
      description: 'about.services.items.well',
      image: 'water/water1.png'
    },
    {
      title: 'gallery.filters.leisure',
      description: 'leisure_page.events.description',
      image: 'sport/baydarka.png'
    }
  ];

  offers = [
    'leisure_page.offers.list.0',
    'leisure_page.offers.list.1',
    'leisure_page.offers.list.2',
    'leisure_page.offers.list.3',
    'leisure_page.offers.list.4',
    'leisure_page.offers.list.5',
    'leisure_page.offers.list.6',
    'leisure_page.offers.list.7'
  ];
}
