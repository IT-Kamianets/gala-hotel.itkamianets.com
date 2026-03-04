import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-24 bg-gray-50 overflow-hidden">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-serif font-bold text-secondary-900 mb-6 italic">
            Наші послуги
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-secondary-600 font-light">
            Ми пропонуємо повний спектр послуг для вашого комфортного відпочинку, оздоровлення та розваг.
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
                  [alt]="service.title" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <!-- Service Content -->
              <div class="p-8 flex flex-col flex-grow">
                <h3 class="text-xl font-bold text-secondary-900 font-serif mb-3 italic group-hover:text-primary-600 transition-colors">{{ service.title }}</h3>
                <p class="text-secondary-600 text-sm font-light leading-relaxed mb-6 flex-grow">
                  {{ service.description }}
                </p>
                <div class="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary-600 group-hover:text-primary-700 transition-colors">
                  Детальніше
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
            Всі послуги готелю
          </button>
        </div>
      </div>
    </section>
  `,
})
export class ServicesPreviewComponent {
  services = [
    {
      title: 'Ресторани',
      description: 'Вишукана кухня у ресторанах «Пуаро» та «Bellagio». Авторські страви та затишна атмосфера.',
      image: 'puaro/services_puaro.jpg',
      link: '/restaurant'
    },
    {
      title: 'Розваги',
      description: 'Боулінг-клуб «Galactica», тенісні корти, тир та дитячі атракціони для активного відпочинку.',
      image: 'bowling/bowl1.png',
      link: '/bowling-entertainment'
    },
    {
      title: 'Оздоровлення',
      description: 'Власний бювет з мінеральною водою «Нафтуся», сауна та велика паркова зона для прогулянок.',
      image: 'sauna/sauna1.png',
      link: '/sauna'
    },
    {
      title: 'Конференції',
      description: 'Професійний конференц-зал на 80 осіб з усім необхідним обладнанням для бізнес-заходів.',
      image: 'conference-service/confserv1.png',
      link: '/conference-service'
    }
  ];
}
