import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private translate = inject(TranslateService);
  isMenuOpen = false;

  currentLang: string;

  constructor() {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang) {
      this.translate.use(savedLang);
      this.currentLang = savedLang;
    } else {
      this.currentLang = this.translate.currentLang || this.translate.defaultLang || 'uk';
    }
  }

  navLinks = [
    { path: '/', label: 'header.home' },
    { path: '/rooms', label: 'header.rooms' },
    { path: '/services', label: 'header.services' },
    { path: '/gallery', label: 'header.gallery' },
    { path: '/contacts', label: 'header.contacts' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('selectedLang', lang);
  }
}
