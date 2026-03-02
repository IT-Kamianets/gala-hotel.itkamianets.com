import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corporate-events',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink],
  templateUrl: './corporate-events.component.html',
})
export class CorporateEventsComponent {
  galleryImages = [
    { url: 'belagio/corp1.png', alt: 'Корпоратив у Белладжіо 1' },
    { url: 'belagio/corp2.png', alt: 'Корпоратив у Белладжіо 2' },
    { url: 'belagio/corp3.png', alt: 'Корпоратив у Белладжіо 3' },
    { url: 'belagio/corp4.png', alt: 'Корпоратив у Белладжіо 4' },
    { url: 'belagio/corp5.png', alt: 'Корпоратив у Белладжіо 5' }
  ];

  features = [
    { title: 'Веселі ведучі', desc: "Професійні ведучі, які створять драйвову атмосферу та об'єднають колектив." },
    { title: 'Музика та конкурси', desc: 'Повне музичне оформлення та цікава розважальна програма з конкурсами.' },
    { title: 'Фотозона у подарунок', desc: 'Стильна тематична фотозона для яскравих кадрів вашої команди.' },
    { title: 'Активний відпочинок', desc: 'Можливість організації боулінгу, тенісу та прогулянок на природі.' }
  ];
}
