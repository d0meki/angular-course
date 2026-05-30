import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tittle',
  imports: [],
  template: ` <h1 class="text-3xl mb-5">{{ title }}</h1>`,
  styleUrl: './tittle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tittle {
  @Input({ required: true }) title!: string;
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
