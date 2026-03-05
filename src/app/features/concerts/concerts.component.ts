import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-concerts',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './concerts.component.html',
})
export class ConcertsComponent {
  private translate = inject(TranslateService);

  galleryImages = [
    { url: 'belagio/concert1.png', alt: 'Concert 1' },
    { url: 'belagio/concert2.png', alt: 'Concert 2' },
    { url: 'belagio/concert3.png', alt: 'Concert 3' },
    { url: 'belagio/services_concert.png', alt: 'Concert Hall' }
  ];
}
