import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mineral-water',
  standalone: true,
  imports: [CommonModule, PageHeroComponent, RouterLink, TranslateModule],
  templateUrl: './mineral-water.component.html',
})
export class MineralWaterComponent {
  private translate = inject(TranslateService);

  chemicalComposition = [
    { name: 'mineral_water.composition.names.hydrocarbonates', value: '1000-1500' },
    { name: 'mineral_water.composition.names.sulfates', value: '150-300' },
    { name: 'mineral_water.composition.names.chlorides', value: '50-150' },
    { name: 'mineral_water.composition.names.calcium', value: '150-300' },
    { name: 'mineral_water.composition.names.magnesium', value: '50-150' },
    { name: 'mineral_water.composition.names.sodium_potassium', value: '50-150' }
  ];

  therapeuticEffects = [
    'mineral_water.therapeutic.items.0',
    'mineral_water.therapeutic.items.1',
    'mineral_water.therapeutic.items.2',
    'mineral_water.therapeutic.items.3',
    'mineral_water.therapeutic.items.4',
    'mineral_water.therapeutic.items.5'
  ];
}
