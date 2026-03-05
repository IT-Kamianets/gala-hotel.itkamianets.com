import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-children-attractions',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './children-attractions.component.html',
})
export class ChildrenAttractionsComponent {
  private translate = inject(TranslateService);

  galleryImages = [
    { url: 'child/child1.png', alt: 'Children attraction 1' },
    { url: 'child/child2.png', alt: 'Children attraction 2' },
    { url: 'child/child3.png', alt: 'Children attraction 3' },
    { url: 'child/child4.png', alt: 'Children attraction 4' },
    { url: 'child/child5.png', alt: 'Children attraction 5' },
    { url: 'child/child6.png', alt: 'Children attraction 6' },
    { url: 'child/child7.png', alt: 'Children attraction 7' },
    { url: 'child/child8.png', alt: 'Children attraction 8' }
  ];

  benefits = [
    { title: 'children_attractions.atmosphere.security', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.233-2.047-.618-3.04z' },
    { title: 'children_attractions.atmosphere.walking', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
    { title: 'rules_page.paid_services.playground', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];
}
