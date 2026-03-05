import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sport-extreme',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './sport-extreme.component.html',
})
export class SportExtremeComponent {
  private translate = inject(TranslateService);

  reasons = [
    'sport_extreme.city_intro.reasons.0',
    'sport_extreme.city_intro.reasons.1',
    'sport_extreme.city_intro.reasons.2',
    'sport_extreme.city_intro.reasons.3',
    'sport_extreme.city_intro.reasons.4',
    'sport_extreme.city_intro.reasons.5',
    'sport_extreme.city_intro.reasons.6'
  ];

  activities = [
    { title: 'sport_extreme.activities.park.title', desc: 'sport_extreme.activities.park.description', img: 'sport/park.png' },
    { title: 'sport_extreme.activities.football.title', desc: 'sport_extreme.activities.football.description', img: 'sport/football.png' },
    { title: 'sport_extreme.activities.tennis.title', desc: 'sport_extreme.activities.tennis.description', img: 'sport/tenis.png' },
    { title: 'sport_extreme.activities.kayaking.title', desc: 'sport_extreme.activities.kayaking.description', img: 'sport/baydarka.png' },
    { title: 'sport_extreme.activities.boat.title', desc: 'sport_extreme.activities.boat.description', img: 'sport/boat.png' },
    { title: 'sport_extreme.activities.brdm.title', desc: 'sport_extreme.activities.brdm.description', img: 'sport/brdm.png' }
  ];
}
