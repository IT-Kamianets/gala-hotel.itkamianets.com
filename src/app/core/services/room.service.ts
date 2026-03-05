import { Injectable } from '@angular/core';

export interface RoomPriceOption {
  label: string;
  guests: number;
  price: number;
}

export interface Room {
  id: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  images?: string[];
  capacity: string;
  size: string;
  amenities: string[];
  priceOptions?: RoomPriceOption[];
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private rooms: Room[] = [
    {
      id: 'standard',
      category: 'rooms.data.standard.category',
      title: 'rooms.data.standard.title',
      description: 'rooms.data.standard.description',
      longDescription: 'rooms.data.standard.longDescription',
      price: 1300,
      priceOptions: [
        { label: 'rooms.data.standard.price_options.1_person', guests: 1, price: 1300 },
        { label: 'rooms.data.standard.price_options.2_person', guests: 2, price: 1700 },
        { label: 'rooms.data.standard.price_options.3_person', guests: 3, price: 2200 }
      ],
      image: 'standard/standard1.png',
      images: ['standard/standard1.png', 'standard/standard2.png', 'standard/standard3.png'],
      capacity: 'rooms.data.standard.capacity',
      size: '15 м²',
      amenities: [
        'rooms.data.standard.amenities.breakfast',
        'rooms.data.standard.amenities.bed',
        'rooms.data.standard.amenities.tv',
        'rooms.data.standard.amenities.phone',
        'rooms.data.standard.amenities.shower',
        'rooms.data.standard.amenities.toiletries',
        'rooms.data.standard.amenities.perfumery'
      ]
    },
    {
      id: 'standard-plus',
      category: 'rooms.data.standard_plus.category',
      title: 'rooms.data.standard_plus.title',
      description: 'rooms.data.standard_plus.description',
      longDescription: 'rooms.data.standard_plus.longDescription',
      price: 1400,
      priceOptions: [
        { label: 'rooms.data.standard.price_options.1_person', guests: 1, price: 1400 },
        { label: 'rooms.data.standard.price_options.2_person', guests: 2, price: 1800 },
        { label: 'rooms.data.standard.price_options.3_person', guests: 3, price: 2300 },
        { label: 'rooms.data.standard_plus.price_options.4_person', guests: 4, price: 2900 }
      ],
      image: 'standard-plus/plus1.png',
      images: ['standard-plus/plus1.png', 'standard-plus/plus2.png', 'standard-plus/plus3.png'],
      capacity: 'rooms.data.standard_plus.capacity',
      size: '21 м²',
      amenities: [
        'rooms.data.standard.amenities.breakfast',
        'rooms.data.standard.amenities.bed',
        'rooms.data.standard.amenities.tv',
        'rooms.data.standard.amenities.phone',
        'rooms.data.standard_plus.amenities.internet',
        'rooms.data.standard.amenities.shower',
        'rooms.data.standard_plus.amenities.hygiene',
        'rooms.data.standard.amenities.perfumery'
      ]
    },
    {
      id: 'apartments',
      category: 'rooms.data.apartments.category',
      title: 'rooms.data.apartments.title',
      description: 'rooms.data.apartments.description',
      longDescription: 'rooms.data.apartments.longDescription',
      price: 2100,
      priceOptions: [
        { label: 'rooms.data.standard.price_options.1_person', guests: 1, price: 2100 },
        { label: 'rooms.data.standard.price_options.2_person', guests: 2, price: 2600 },
        { label: 'rooms.data.standard.price_options.3_person', guests: 3, price: 3000 },
        { label: 'rooms.data.standard_plus.price_options.4_person', guests: 4, price: 3600 }
      ],
      image: 'apartaments/apart1.png',
      images: ['apartaments/apart1.png', 'apartaments/apart2.png', 'apartaments/apart3.png'],
      capacity: 'rooms.data.apartments.capacity',
      size: '40 м²',
      amenities: [
        'rooms.data.standard.amenities.breakfast', 
        'rooms.data.apartments.amenities.bed_double', 
        'rooms.data.apartments.amenities.sofa', 
        'rooms.data.apartments.amenities.kitchen', 
        'rooms.data.apartments.amenities.stove', 
        'rooms.data.apartments.amenities.kettle', 
        'rooms.data.standard.amenities.tv', 
        'rooms.data.standard.amenities.phone', 
        'rooms.data.apartments.amenities.fridge', 
        'rooms.data.standard_plus.amenities.internet', 
        'rooms.data.standard.amenities.shower', 
        'rooms.data.standard_plus.amenities.hygiene', 
        'rooms.data.apartments.amenities.hairdryer'
      ]
    },
    {
      id: 'eco-room',
      category: 'rooms.data.eco.category',
      title: 'rooms.data.eco.title',
      description: 'rooms.data.eco.description',
      longDescription: 'rooms.data.eco.longDescription',
      price: 850,
      priceOptions: [
        { label: 'rooms.data.standard.price_options.1_person', guests: 1, price: 850 },
        { label: 'rooms.data.standard.price_options.2_person', guests: 2, price: 1200 },
        { label: 'rooms.data.standard.price_options.3_person', guests: 3, price: 1700 },
        { label: 'rooms.data.standard_plus.price_options.4_person', guests: 4, price: 2180 }
      ],
      image: 'eco/eco1.png',
      images: ['eco/eco1.png', 'eco/eco2.png', 'eco/eco3.png', 'eco/eco4.png'],
      capacity: 'rooms.data.eco.capacity',
      size: '18 м²',
      amenities: [
        'rooms.data.standard.amenities.breakfast', 
        'rooms.data.eco.amenities.bunk_beds', 
        'rooms.data.standard.amenities.tv', 
        'rooms.data.standard_plus.amenities.hygiene', 
        'rooms.data.standard.amenities.perfumery', 
        'rooms.data.eco.amenities.wifi'
      ]
    }
  ];

  getRooms() {
    return this.rooms;
  }

  getRoomById(id: string) {
    return this.rooms.find(room => room.id === id);
  }
}
