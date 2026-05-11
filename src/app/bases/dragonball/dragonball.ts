import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../interfaces/character.interface';
import { Card } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumber } from 'primeng/inputnumber';
import { Button } from 'primeng/button';
@Component({
  selector: 'app-dragonball',
  imports: [FormsModule, Button, CommonModule, Card, InputTextModule, FloatLabel, InputNumber],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dragonball {
  name = signal('');
  power = signal<number>(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 4, name: 'Yamcha', power: 500 },
    // { id: 3, name: 'Piccolo', power: 3000 },
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
