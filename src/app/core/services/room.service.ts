import { Injectable } from '@angular/core';

export interface Room {
  id: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  capacity: string;
  size: string;
  amenities: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private rooms: Room[] = [
    {
      id: 'standard',
      category: 'Корпуси 1, 2',
      title: 'Стандарт',
      description: 'Класичний номер зі всіма зручностями. У вартість включено сніданок.',
      longDescription: 'Затишний номер площею 22 м², ідеально підходить для комфортного відпочинку. Номер обладнаний зручним двоспальним або двома окремими ліжками, сучасним телевізором та робочою зоною.',
      price: 1550,
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=2070',
      capacity: '2 особи',
      size: '22 м²',
      amenities: ['Сніданок включено', 'Wi-Fi', 'Кабельне ТБ', 'Душ', 'Кондиціонер', 'Холодильник', 'Фен']
    },
    {
      id: 'standard-plus',
      category: 'Корпуси 1, 2',
      title: 'Стандарт Плюс',
      description: 'Покращений номер з додатковим простором та оновленим інтер’єром.',
      longDescription: 'Покращений номер площею 26 м² з сучасним дизайном. Більше простору, покращене планування та всі необхідні зручності для вашого ідеального перебування.',
      price: 1600,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1974',
      capacity: '2 особи',
      size: '26 м²',
      amenities: ['Сніданок включено', 'Wi-Fi', 'Кабельне ТБ', 'Холодильник', 'Фен', 'Кондиціонер', 'Сейф']
    },
    {
      id: 'apartments',
      category: 'Корпус 1',
      title: 'Апартаменти',
      description: 'Найрозкішніший варіант у нашому комплексі. Дві кімнати та преміальний сервіс.',
      longDescription: 'Розкішні двокімнатні апартаменти площею 45 м². Окрема вітальня та спальня, вишукані меблі та панорамний вид на місто створюють атмосферу справжньої розкоші.',
      price: 2400,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070',
      capacity: '2 особи',
      size: '45 м²',
      amenities: ['Сніданок включено', 'Дві кімнати', 'Міні-бар', 'Ванна', 'Сейф', 'Кавомашина', 'Халати та капці']
    },
    {
      id: 'eco-room',
      category: 'Корпус 3 (ЕКО)',
      title: 'ЕКО Номер',
      description: 'Номери у новому корпусі (2019 р.). Бюджетний та екологічний варіант.',
      longDescription: 'Сучасний екологічний номер у нашому найновішому корпусі. Мінімалістичний дизайн, використання натуральних матеріалів та все необхідне для бюджетного, але комфортного відпочинку.',
      price: 1100,
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=2070',
      capacity: '2 особи',
      size: '18 м²',
      amenities: ['Економ-сніданок', 'Wi-Fi', 'Новий корпус', 'Еко-матеріали', 'ТБ', 'Душ']
    }
  ];

  getRooms() {
    return this.rooms;
  }

  getRoomById(id: string) {
    return this.rooms.find(room => room.id === id);
  }
}
