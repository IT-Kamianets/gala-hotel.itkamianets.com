import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  history = [
    { year: '2002', event: 'about.history.events.2002' },
    { year: '2004', event: 'about.history.events.2004' },
    { year: '2008', event: 'about.history.events.2008' },
    { year: '2009', event: 'about.history.events.2009' },
    { year: '2011', event: 'about.history.events.2011' },
    { year: '2012', event: 'about.history.events.2012' }
  ];

  roomTypes = [
    { name: 'about.rooms.types.standard', count: 24, size: '18 м2', capacity: 'about.rooms.capacity.1_3' },
    { name: 'about.rooms.types.standard_plus', count: 21, size: '26 м2', capacity: 'about.rooms.capacity.up_to_4' },
    { name: 'about.rooms.types.apartments', count: 2, size: 'about.rooms.capacity.two_room', capacity: 'about.rooms.capacity.up_to_4' },
    { name: 'about.rooms.types.eco', count: 18, size: '-', capacity: 'about.rooms.capacity.bunk_beds' },
    { name: 'about.rooms.types.economy', count: 3, size: '-', capacity: 'about.rooms.capacity.1_3' }
  ];

  additionalServices = [
    'about.services.items.safe',
    'about.services.items.luggage',
    'about.services.items.laundry',
    'about.services.items.well',
    'about.services.items.sauna_bowling',
    'about.services.items.tennis',
    'about.services.items.playground',
    'about.services.items.excursion'
  ];

  mapLegend = [
    { id: 1, name: 'about.map.legend.building_1' },
    { id: 2, name: 'about.map.legend.building_2' },
    { id: 3, name: 'about.map.legend.rest_bellagio' },
    { id: 4, name: 'about.map.legend.rest_puaro' },
    { id: 5, name: 'about.map.legend.bowling' },
    { id: 6, name: 'about.map.legend.terrace' },
    { id: 7, name: 'about.map.legend.gazebo' },
    { id: 8, name: 'about.map.legend.sauna' },
    { id: 9, name: 'about.map.legend.tennis' },
    { id: 10, name: 'about.map.legend.shooting' },
    { id: 11, name: 'about.map.legend.playground' },
    { id: 12, name: 'about.map.legend.well' },
    { id: 13, name: 'about.map.legend.parrots' },
    { id: 14, name: 'about.map.legend.conf_hall' },
    { id: 15, name: 'about.map.legend.utility' },
    { id: 16, name: 'about.map.legend.parking_1' },
    { id: 17, name: 'about.map.legend.parking_2' },
    { id: 18, name: 'about.map.legend.building_3_eco' }
  ];
}
