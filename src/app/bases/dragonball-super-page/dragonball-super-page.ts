import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DragonballService } from '../services/dragonball.service';
import { CharacterAdd } from '../components/dragonball/character-add/character-add';
import { CharacterList } from '../components/dragonball/character-list/character-list';
import { Card } from 'primeng/card';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterAdd, CharacterList, Card],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballSuperPage {
  public dragonballService = inject(DragonballService);
  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   // { id: 2, name: 'Vegeta', power: 8000 },
  //   // { id: 4, name: 'Yamcha', power: 500 },
  //   // { id: 3, name: 'Piccolo', power: 3000 },
  // ]);

  // addCharacter(character: Character) {
  //   this.characters.update((list) => [...list, character]);
  // }
}
