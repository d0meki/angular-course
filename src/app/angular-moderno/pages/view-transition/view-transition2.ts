import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Tittle } from '@app/angular-moderno/shared/tittle/tittle';

@Component({
  selector: 'app-view-transition2',
  imports: [Tittle],
  template: `
    <app-tittle title="View Transition 2" />

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionDos {}
