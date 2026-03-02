import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { ServicesComponent } from './features/services/services.component';
import { RoomsComponent } from './features/rooms/rooms.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { RoomDetailComponent } from './features/rooms/room-detail/room-detail.component';
import { RestaurantComponent } from './features/restaurant/restaurant.component';
import { RestaurantBellagioComponent } from './features/restaurant-bellagio/restaurant-bellagio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/:id', component: RoomDetailComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'restaurant-bellagio', component: RestaurantBellagioComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '' }
];
