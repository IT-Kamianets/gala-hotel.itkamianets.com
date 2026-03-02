import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bellagio-conference',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './bellagio-conference.component.html',
})
export class BellagioConferenceComponent {
  pricing = [
    { period: '1-3 год', price: '2000 грн./год.' },
    { period: '3-6 год', price: '1500 грн./год.' },
    { period: '6 і більше год.', price: '1000 грн./год.' }
  ];

  galleryImages = [
    { url: 'belagio/conf1.png', alt: 'Конференц-зал Bellagio 1' },
    { url: 'belagio/conf2.png', alt: 'Конференц-зал Bellagio 2' },
    { url: 'belagio/conf3.png', alt: 'Конференц-зал Bellagio 3' },
    { url: 'belagio/conf4.png', alt: 'Конференц-зал Bellagio 4' }
  ];

  features = [
    { title: 'Сучасна техніка', desc: 'Зал оснащений проектором, екранами та потужною акустичною системою.' },
    { title: 'Розміщення гостей', desc: 'Учасники можуть комфортно оселитися в номерах «Гала готелю».' },
    { title: 'Харчування', desc: 'Смачні та корисні страви від ресторану «Bellagio» для кава-брейків та обідів.' },
    { title: 'Відпочинок', desc: 'Велика територія для прогулянок на природі після робочого дня.' }
  ];
}
