import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardPipeComponent } from '@app/pipes-exercise/componets/card-pipe/card-pipe.component';
import { heroes } from '@app/pipes-exercise/data/heroes.data';
import { Hero } from '@app/pipes-exercise/interfaces/heroes.interface';
import { Button } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { TableModule } from 'primeng/table';
//pipes
import { CanFlyPipe } from '@app/pipes-exercise/pipes/can-fly.pipe';
import { HeroColorPipe } from '@app/pipes-exercise/pipes/heroColor.pipe';
import { HeroCreatorPipe } from '@app/pipes-exercise/pipes/hero-creator.pipe';
import { HeroTextColorPipe } from '@app/pipes-exercise/pipes/hero-text-color.pipe';
import { ToggleCasePipe } from '@app/pipes-exercise/pipes/toggle-case.pipe';
import { InputText } from 'primeng/inputtext';
import { Badge } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { HeroSortByPipe } from '@app/pipes-exercise/pipes/hero-sort-by.pipe';
import { HeroFilterPipe } from '@app/pipes-exercise/pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    CardPipeComponent,
    Button,
    ToggleCasePipe,
    Divider,
    TableModule,
    CanFlyPipe,
    HeroColorPipe,
    HeroCreatorPipe,
    HeroTextColorPipe,
    HeroSortByPipe,
    HeroFilterPipe,
    InputText,
    Badge,
    CommonModule,
  ],
  templateUrl: './custom-page.html',
  styleUrl: './custom-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage {
  name = signal('Freddy Domeki');

  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');
}
