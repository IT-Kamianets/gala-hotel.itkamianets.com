import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-concerts',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './concerts.component.html',
})
export class ConcertsComponent {
  galleryImages = [
    { url: 'belagio/concert1.png', alt: 'Сцена ресторану Bellagio' },
    { url: 'belagio/concert2.png', alt: 'Глядацька зала' },
    { url: 'belagio/concert3.png', alt: 'Освітлення та атмосфера' }
  ];

  features = [
    { title: 'Професійна сцена', desc: 'Велика стаціонарна сцена з кулісами, піднята для ідеального огляду.' },
    { title: 'Звук та світло', desc: 'Професійне звукове обладнання та керовані світлові прилади для шоу.' },
    { title: 'Театральна посадка', desc: 'Можливість розміщення глядачів на двох ярусах (до 250 осіб).' },
    { title: 'Артистичний сервіс', desc: 'Наявність гримерок та технічних приміщень для артистів.' }
  ];
}
