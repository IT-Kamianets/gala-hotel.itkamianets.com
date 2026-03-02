import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-family-events',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './family-events.component.html',
})
export class FamilyEventsComponent {
  galleryImages = [
    { url: 'belagio/family1.png', alt: 'Родинне свято 1' },
    { url: 'belagio/family2.png', alt: 'Родинне свято 2' },
    { url: 'belagio/family3.png', alt: 'Родинне свято 3' },
    { url: 'belagio/family4.png', alt: 'Родинне свято 4' },
    { url: 'belagio/services_family.png', alt: 'Святкова атмосфера' }
  ];

  features = [
    { title: 'Просторий зал', desc: 'Затишне приміщення для великих та малих родинних компаній.' },
    { title: 'Доступні ціни', desc: 'Смачні страви української та європейської кухонь за розумною вартістю.' },
    { title: 'Оформлення', desc: 'Вишукане оформлення фуршетного столу та Candy bar для вашого свята.' },
    { title: 'Зона для малят', desc: 'Спеціально облаштована зона для годування та догляду за немовлятами.' }
  ];
}
