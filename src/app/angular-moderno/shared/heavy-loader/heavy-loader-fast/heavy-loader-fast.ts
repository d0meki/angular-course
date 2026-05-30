import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loader-fast',
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-content />
    </section>
  `,
  styleUrl: './heavy-loader-fast.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoaderFast {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('HeavyLoader Fast creado');
  }
}
