import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryPreviewComponent } from './components/gallery-preview/gallery-preview.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, GalleryPreviewComponent, RouterLink],
  template: `
    <app-hero></app-hero>
    
    <!-- About Us Preview Section -->
    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2 space-y-8">
            <div class="inline-block px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-xs font-bold uppercase tracking-widest">
              Наша історія з 2002 року
            </div>
            <h2 class="text-3xl md:text-5xl font-serif font-bold text-secondary-900 leading-tight italic">
              Про «Гала Готель»
            </h2>
            <p class="text-lg text-secondary-600 leading-relaxed font-light">
              Готельно-туристичний комплекс «Гала-Готель» розпочав свою роботу в 2002 році. За цей час ми пройшли шлях від відкриття основного корпусу до створення масштабної інфраструктури з ресторанами, боулінг-клубом та професійними кортами.
            </p>
            <p class="text-lg text-secondary-600 leading-relaxed font-light">
              У 2011 році наш готель увійшов до списку 100 кращих готелів України, що підтверджує високий рівень обслуговування та вагомий внесок у розвиток міста.
            </p>
            
            <div class="pt-4 flex flex-col sm:flex-row items-start gap-6">
              <button routerLink="/about" class="bg-secondary-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-600 transition-all shadow-xl active:scale-95">
                Дізнатися більше
              </button>
              <div class="flex items-center gap-4 py-2">
                <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  <span class="font-serif font-bold text-xl">3*</span>
                </div>
                <span class="text-xs font-bold text-secondary-500 uppercase tracking-widest">Сертифікований тризірковий готель</span>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 relative">
            <div class="absolute -top-10 -right-10 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div class="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white">
              <img src="gallery/1.png" alt="Gala Hotel Exterior" class="w-full h-[500px] object-cover">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Infrastructure Highlights (Updated) -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8 text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4 tracking-tight italic">Ваш ідеальний відпочинок</h2>
        <div class="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4 lg:px-8">
        <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center space-y-4 group">
          <div class="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6 text-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors">🛎️</div>
          <h3 class="text-xl font-bold text-secondary-900 font-serif italic">68 Номерів</h3>
          <p class="text-secondary-600 text-sm font-light leading-relaxed">Комфортні номери від «Економ» до «Апартаментів» для будь-якого бюджету.</p>
        </div>
        <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center space-y-4 group">
          <div class="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6 text-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors">🎳</div>
          <h3 class="text-xl font-bold text-secondary-900 font-serif italic">Активний драйв</h3>
          <p class="text-secondary-600 text-sm font-light leading-relaxed">Власний боулінг-клуб, тенісний корт та спортивні розваги.</p>
        </div>
        <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center space-y-4 group">
          <div class="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6 text-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors">🌿</div>
          <h3 class="text-xl font-bold text-secondary-900 font-serif italic">Парк 1.2 га</h3>
          <p class="text-secondary-600 text-sm font-light leading-relaxed">Величезна паркова зона для прогулянок, автокемпінгу та відпочинку.</p>
        </div>
        <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center space-y-4 group">
          <div class="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6 text-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors">🍽️</div>
          <h3 class="text-xl font-bold text-secondary-900 font-serif italic">Вишукана кухня</h3>
          <p class="text-secondary-600 text-sm font-light leading-relaxed">Два ресторани («Пуаро» та «Bellagio») з різноманітним меню.</p>
        </div>
      </div>
    </section>

    <!-- Gallery Preview -->
    <app-gallery-preview></app-gallery-preview>
  `,
})
export class HomeComponent {}
