import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <section class="py-24 bg-gray-50 overflow-hidden">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-serif font-bold text-secondary-900 mb-6 italic">
            {{ 'home.services.title' | translate }}
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-secondary-600 font-light">
            {{ 'home.services.description' | translate }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (service of services; track service.title) {
            <div 
              [routerLink]="service.link"
              class="bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group flex flex-col h-full overflow-hidden cursor-pointer"
            >
              <!-- Service Image -->
              <div class="relative h-52 overflow-hidden">
                <img 
                  [src]="service.image" 
                  [alt]="service.title | translate" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <!-- Service Content -->
              <div class="p-8 flex flex-col flex-grow">
                <h3 class="text-xl font-bold text-secondary-900 font-serif mb-3 italic group-hover:text-primary-600 transition-colors">{{ service.title | translate }}</h3>
                <p class="text-secondary-600 text-sm font-light leading-relaxed mb-6 flex-grow">
                  {{ service.description | translate }}
                </p>
                <div class="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary-600 group-hover:text-primary-700 transition-colors">
                  {{ 'home.rooms.view_btn' | translate }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="mt-16 text-center">
          <button routerLink="/services" class="bg-secondary-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-600 transition-all shadow-xl active:scale-95">
            {{ 'home.services.more_btn' | translate }}
          </button>
        </div>
      </div>
    </section>
  `,
})
export class ServicesPreviewComponent {
  services = [
    {
      title: 'home.services.items.restaurants.title',
      description: 'home.services.items.restaurants.description',
      image: 'puaro/services_puaro.jpg',
      link: '/restaurant'
    },
    {
      title: 'home.services.items.leisure.title',
      description: 'home.services.items.leisure.description',
      image: 'bowling/bowl1.png',
      link: '/bowling-entertainment'
    },
    {
      title: 'home.services.items.health.title',
      description: 'home.services.items.health.description',
      image: 'sauna/sauna1.png',
      link: '/sauna'
    },
    {
      title: 'home.services.items.conferences.title',
      description: 'home.services.items.conferences.description',
      image: 'conference-service/confserv1.png',
      link: '/conference-service'
    }
  ];
}
