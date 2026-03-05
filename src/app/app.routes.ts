import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: 'rules', 
    loadComponent: () => import('./features/rules/rules.component').then(m => m.RulesComponent) 
  },
  { 
    path: 'rooms', 
    loadComponent: () => import('./features/rooms/rooms.component').then(m => m.RoomsComponent) 
  },
  { 
    path: 'rooms/:id', 
    loadComponent: () => import('./features/rooms/room-detail/room-detail.component').then(m => m.RoomDetailComponent) 
  },
  { 
    path: 'restaurant', 
    loadComponent: () => import('./features/restaurant/restaurant.component').then(m => m.RestaurantComponent) 
  },
  { 
    path: 'restaurant-bellagio', 
    loadComponent: () => import('./features/restaurant-bellagio/restaurant-bellagio.component').then(m => m.RestaurantBellagioComponent) 
  },
  { 
    path: 'bellagio-wedding', 
    loadComponent: () => import('./features/bellagio-wedding/bellagio-wedding.component').then(m => m.BellagioWeddingComponent) 
  },
  { 
    path: 'bellagio-conference', 
    loadComponent: () => import('./features/bellagio-conference/bellagio-conference.component').then(m => m.BellagioConferenceComponent) 
  },
  { 
    path: 'family-events', 
    loadComponent: () => import('./features/family-events/family-events.component').then(m => m.FamilyEventsComponent) 
  },
  { 
    path: 'corporate-events', 
    loadComponent: () => import('./features/corporate-events/corporate-events.component').then(m => m.CorporateEventsComponent) 
  },
  { 
    path: 'concerts', 
    loadComponent: () => import('./features/concerts/concerts.component').then(m => m.ConcertsComponent) 
  },
  { 
    path: 'conference-service', 
    loadComponent: () => import('./features/conference-service/conference-service.component').then(m => m.ConferenceServiceComponent) 
  },
  { 
    path: 'bowling-entertainment', 
    loadComponent: () => import('./features/bowling-entertainment/bowling-entertainment.component').then(m => m.BowlingEntertainmentComponent) 
  },
  { 
    path: 'bowling', 
    loadComponent: () => import('./features/bowling/bowling.component').then(m => m.BowlingComponent) 
  },
  { 
    path: 'tennis-court', 
    loadComponent: () => import('./features/tennis-court/tennis-court.component').then(m => m.TennisCourtComponent) 
  },
  { 
    path: 'children-attractions', 
    loadComponent: () => import('./features/children-attractions/children-attractions.component').then(m => m.ChildrenAttractionsComponent) 
  },
  { 
    path: 'camping', 
    loadComponent: () => import('./features/camping/camping.component').then(m => m.CampingComponent) 
  },
  { 
    path: 'sauna', 
    loadComponent: () => import('./features/sauna/sauna.component').then(m => m.SaunaComponent) 
  },
  { 
    path: 'mineral-water', 
    loadComponent: () => import('./features/mineral-water/mineral-water.component').then(m => m.MineralWaterComponent) 
  },
  { 
    path: 'sport-extreme', 
    loadComponent: () => import('./features/sport-extreme/sport-extreme.component').then(m => m.SportExtremeComponent) 
  },
  { 
    path: 'services', 
    loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent) 
  },
  { 
    path: 'gallery', 
    loadComponent: () => import('./features/gallery/gallery.component').then(m => m.GalleryComponent) 
  },
  { 
    path: 'contacts', 
    loadComponent: () => import('./features/contacts/contacts.component').then(m => m.ContactsComponent) 
  },
  { path: '**', redirectTo: '' }
];
