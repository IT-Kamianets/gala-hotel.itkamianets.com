import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RoomService, Room } from '../../../../core/services/room.service';

@Component({
  selector: 'app-rooms-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-serif font-bold text-secondary-900 mb-6 italic">
            {{ 'home.rooms.title' | translate }}
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-secondary-600 font-light">
            {{ 'home.rooms.description' | translate }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (room of featuredRooms; track room.id) {
            <div 
              [routerLink]="['/rooms', room.id]"
              class="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer"
            >
              <!-- Room Image -->
              <div class="relative h-64 overflow-hidden">
                <img 
                  [src]="room.image" 
                  [alt]="room.title | translate" 
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                >
                <div class="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-600 shadow-sm">
                  {{ room.category | translate }}
                </div>
                <div class="absolute bottom-4 right-4 bg-secondary-900/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-white shadow-xl">
                  <span class="text-xl font-serif font-bold">₴{{ room.price }}</span>
                  <span class="text-[10px] text-gray-400 font-medium uppercase tracking-tighter ml-1">{{ 'rooms.price_per_night' | translate }}</span>
                </div>
              </div>

              <!-- Room Content -->
              <div class="p-6 flex-grow flex flex-col">
                <div class="flex items-center space-x-3 mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {{ room.capacity | translate }}
                  </span>
                  <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {{ room.size }}
                  </span>
                </div>

                <h3 class="text-xl font-serif font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {{ room.title | translate }}
                </h3>
                
                <p class="text-gray-500 text-sm font-light mb-6 line-clamp-2">
                  {{ room.description | translate }}
                </p>

                <div class="mt-auto pt-4 border-t border-gray-50">
                  <div class="w-full bg-primary-50 text-primary-700 py-3 rounded-xl font-bold text-sm transition-all group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-lg flex items-center justify-center space-x-2">
                    <span>{{ 'home.rooms.view_btn' | translate }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="mt-16 text-center">
          <button routerLink="/rooms" class="inline-flex items-center space-x-3 text-secondary-900 font-bold hover:text-primary-600 transition-colors group">
            <span class="text-lg">{{ 'home.rooms.all_rooms_btn' | translate }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  `,
})
export class RoomsPreviewComponent implements OnInit {
  featuredRooms: Room[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    // Show first 3 rooms as featured on home page
    this.featuredRooms = this.roomService.getRooms().slice(0, 3);
  }
}
