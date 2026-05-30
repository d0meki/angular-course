import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loader-slow',
  imports: [CommonModule],
  template: ` <section [ngClass]="['w-full h-150', cssClass]">Heavy Loader Slow</section> `,
  styleUrl: './heavy-loader-slow.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoaderSlow {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}

    console.log('Cargado');
  }
}
