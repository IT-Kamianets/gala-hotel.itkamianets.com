import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bellagio-conference',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, TranslateModule],
  templateUrl: './bellagio-conference.component.html',
})
export class BellagioConferenceComponent {
  private translate = inject(TranslateService);

  pricing = [
    { period: 'bellagio_conference.pricing.period_1_3', price: '2000 грн./год.' },
    { period: 'bellagio_conference.pricing.period_3_6', price: '1500 грн./год.' },
    { period: 'bellagio_conference.pricing.period_6_plus', price: '1000 грн./год.' }
  ];

  galleryImages = [
    { url: 'belagio/conf1.png', alt: 'bellagio_conference.gallery.img1' },
    { url: 'belagio/conf2.png', alt: 'bellagio_conference.gallery.img2' },
    { url: 'belagio/conf3.png', alt: 'bellagio_conference.gallery.img3' },
    { url: 'belagio/conf4.png', alt: 'bellagio_conference.gallery.img4' }
  ];

  features = [
    { title: 'bellagio_conference.features.equipment.title', desc: 'bellagio_conference.features.equipment.desc' },
    { title: 'bellagio_conference.features.accommodation.title', desc: 'bellagio_conference.features.accommodation.desc' },
    { title: 'bellagio_conference.features.catering.title', desc: 'bellagio_conference.features.catering.desc' },
    { title: 'bellagio_conference.features.leisure.title', desc: 'bellagio_conference.features.leisure.desc' }
  ];
}
