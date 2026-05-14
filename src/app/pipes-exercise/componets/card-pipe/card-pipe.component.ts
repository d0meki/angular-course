import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'card-pipe',
  imports: [Card],
  template: `
    <p-card [style]="{ width: '25rem', overflow: 'hidden' }" [header]="title()">
      <ng-content></ng-content>
    </p-card>
  `,
  styleUrl: './card-pipe.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPipeComponent {
  title = input.required<string>();
  heightCard = input<string>('12rem');
}
