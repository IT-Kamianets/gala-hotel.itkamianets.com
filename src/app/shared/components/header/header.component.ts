import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMenuOpen = false;

  navLinks = [
    { path: '/', label: 'Головна' },
    { path: '/rooms', label: 'Номери' },
    { path: '/services', label: 'Послуги' },
    { path: '/gallery', label: 'Галерея' },
    { path: '/contacts', label: 'Контакти' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
