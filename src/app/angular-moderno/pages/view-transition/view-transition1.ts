import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Tittle } from "@app/angular-moderno/shared/tittle/tittle";

@Component({
  selector: 'app-view-transation1',
  imports: [Tittle],
  template: ` <app-tittle title="View Transition 1" />

    <section class="flex justify-start">

      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero2"
      ></div>


    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionUno {}
