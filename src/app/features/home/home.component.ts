import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryPreviewComponent } from './components/gallery-preview/gallery-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, GalleryPreviewComponent],
  template: `
    <app-hero></app-hero>
    
    <!-- About Us Section -->
    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2 space-y-8">
            <div class="inline-block px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full text-primary-700 text-xs font-bold uppercase tracking-widest">
              Наша історія з 2002 року
            </div>
            <h2 class="text-3xl md:text-5xl font-serif font-bold text-secondary-900 leading-tight italic">
              Один з 100 найкращих готелів України
            </h2>
            <p class="text-lg text-secondary-600 leading-relaxed font-light">
              «Гала Готель» — це не просто місце для ночівлі, а повноцінний готельно-туристичний комплекс. Ми пишаємося тим, що у 2011 році увійшли до списку 100 найкращих готелів України. 
            </p>
            <p class="text-lg text-secondary-600 leading-relaxed font-light">
              Комплекс складається з трьох корпусів (68 номерів), включаючи сучасний «ЕКО» корпус, відкритий у 2019 році. Ми знаходимося у затишному парку, лише за 15 хвилин від середньовічної фортеці.
            </p>
            <div class="grid grid-cols-2 gap-8 pt-4">
              <div class="border-l-4 border-primary-500 pl-6">
                <div class="text-3xl font-serif font-bold text-secondary-900">68</div>
                <div class="text-sm text-secondary-500 uppercase tracking-wider">Затишних номерів</div>
              </div>
              <div class="border-l-4 border-primary-500 pl-6">
                <div class="text-3xl font-serif font-bold text-secondary-900">3</div>
                <div class="text-sm text-secondary-500 uppercase tracking-wider">Житлових корпуси</div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 relative">
            <div class="absolute -top-10 -right-10 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div class="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070" alt="Gala Hotel Exterior" class="w-full h-[500px] object-cover">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Infrastructure Highlights -->
    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8 text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4 tracking-tight italic">Більше ніж готель</h2>
        <div class="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4 lg:px-8">
        <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center space-y-4">
          <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6 text-2xl">🍽️</div>
          <h3 class="text-xl font-bold text-secondary-900 font-serif italic">Ресторан «Пуаро»</h3>
          <p class="text-secondary-600 text-sm font-light leading-relaxed">Європейська та українська кухня, літня тераса та альтанки у парку.</p>
        </div>
        <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center space-y-4">
          <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6 text-2xl">🎳</div>
          <h3 class="text-xl font-bold text-secondary-900 font-serif italic">Боулінг «Galactica»</h3>
          <p class="text-secondary-600 text-sm font-light leading-relaxed">Активний відпочинок для всієї родини на професійних доріжках.</p>
        </div>
        <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center space-y-4">
          <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6 text-2xl">💧</div>
          <h3 class="text-xl font-bold text-secondary-900 font-serif italic">Бювет «Нафтуся»</h3>
          <p class="text-secondary-600 text-sm font-light leading-relaxed">Власний бювет з цілющою мінеральною водою для вашого здоров'я.</p>
        </div>
        <div class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center space-y-4">
          <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6 text-2xl">🛡️</div>
          <h3 class="text-xl font-bold text-secondary-900 font-serif italic font-bold">Безпечне Укриття</h3>
          <p class="text-secondary-600 text-sm font-light leading-relaxed">На території облаштоване надійне укриття для повної безпеки гостей.</p>
        </div>
      </div>
    </section>

    <!-- Gallery Preview -->
    <app-gallery-preview></app-gallery-preview>
  `,
})
export class HomeComponent {}
