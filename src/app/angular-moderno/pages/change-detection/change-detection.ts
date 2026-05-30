import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Tittle } from '@app/angular-moderno/shared/tittle/tittle';

@Component({
  selector: 'app-change-detection',
  imports: [Tittle, JsonPipe],
  template: `
    <app-tittle [title]="currentFramework()" />

    <pre> {{ frameworkAsSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>
  `,
  styleUrl: './change-detection.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetection {
  public currentFramework = computed(() => `Change detection - ${this.frameworkAsSignal().name}`);

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((value) => {
        value.name = 'React';

        return { ...value };
      });

      console.log('Hecho');
    }, 3000);
  }
}
