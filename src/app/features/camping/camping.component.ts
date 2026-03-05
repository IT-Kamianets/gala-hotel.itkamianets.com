import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-camping',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './camping.component.html',
})
export class CampingComponent {
  services = [
    'camping_page.services.list.0',
    'camping_page.services.list.1',
    'camping_page.services.list.2',
    'camping_page.services.list.3',
    'camping_page.services.list.4',
    'camping_page.services.list.5'
  ];

  highlights = [
    {
      title: 'footer.service_puaro',
      description: 'services_page.items.restaurant_poirot.description',
      image: 'puaro/services_puaro.jpg'
    },
    {
      title: 'footer.service_bowling',
      description: 'bowling_page.hero.description',
      image: 'bowling/bowl1.png'
    },
    {
      title: 'bowling_page.features.kids.title',
      description: 'bowling_page.features.kids.description',
      image: 'child/child1.png'
    }
  ];
}
