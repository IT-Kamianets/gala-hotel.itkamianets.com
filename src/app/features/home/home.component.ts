import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryPreviewComponent } from './components/gallery-preview/gallery-preview.component';
import { RoomsPreviewComponent } from './components/rooms-preview/rooms-preview.component';
import { ServicesPreviewComponent } from './components/services-preview/services-preview.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, GalleryPreviewComponent, RoomsPreviewComponent, ServicesPreviewComponent, RouterLink],
  template: `
    <app-hero></app-hero>
    
    <!-- About Us Preview Section -->
    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2 space-y-8">
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
            <div 
              routerLink="/about"
              class="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white cursor-pointer group"
            >
              <img src="gallery/2.png" alt="Gala Hotel Exterior" class="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-secondary-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <app-services-preview></app-services-preview>

    <!-- Rooms Preview -->
    <app-rooms-preview></app-rooms-preview>

    <!-- Gallery Preview -->
    <app-gallery-preview></app-gallery-preview>
  `,
})
export class HomeComponent {}
