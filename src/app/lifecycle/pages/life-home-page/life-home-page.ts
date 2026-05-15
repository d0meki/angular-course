import {
  afterNextRender,
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
} from '@angular/core';
import { TitleComponent } from '@app/lifecycle/components/title=component/title.component';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Divider } from 'primeng/divider';

const log = (...messages: string[]) => {
  console.log(`${messages[0]} %c${messages.slice(1).join(', ')} `, 'color: #bada55');
};

@Component({
  selector: 'app-life-home-page',
  imports: [TitleComponent, Button, Card, Divider],
  template: `
    <section class="mx-5 mt-5">
      <h1 class="text-2xl font-bold">Ciclo de Vida (Lifecycle)</h1>
      <h3 class="text-xl font-thin">Angular Component Lifecycle Hooks</h3>
    </section>

    <p-divider />

    <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5">
      <p-card header="Propiedad Tradicional">
        <p class="text-xl mb-4 font-semibold text-primary">{{ traditionalProperty }}</p>
        <p-button
          label="Cambiar Tradicional"
          icon="pi pi-refresh"
          (onClick)="changeTraditional()"
          class="w-full sm:w-auto"
        />
      </p-card>

      <p-card header="Propiedad Signal">
        <p class="text-xl mb-4 font-semibold text-primary">{{ signalProperty() }}</p>
        <p-button
          label="Cambiar Señal"
          icon="pi pi-bolt"
          severity="secondary"
          (onClick)="changeSignal()"
          class="w-full sm:w-auto"
        />
      </p-card>

      <div class="md:col-span-2">
        <p-card header="Componente Hijo (app-title-component)">
          <app-title-component
            [title]="signalProperty()"
            [title2]="signalProperty()"
            [title3]="signalProperty()"
            [title4]="signalProperty()"
          />
        </p-card>
      </div>
    </section>
  `,
  styleUrl: './life-home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LifeHomePage {
  traditionalProperty = 'Fernando';
  signalProperty = signal('Fernando');

  constructor() {
    log('Constructor llamado');

    // setTimeout(() => {
    //   this.signalProperty.set('Juan Carlos');
    // }, 2000);
  }

  changeTraditional() {
    this.traditionalProperty = 'Fernando Herrera';
  }

  changeSignal() {
    this.signalProperty.set('Fernando Herrera');
  }

  basicEffect = effect((onCleanup) => {
    log('effect', 'Disparar efectos secundarios');

    onCleanup(() => {
      log('onCleanup', 'Se ejecuta cuando el efecto se va a destruir');
    });
  });

  ngOnInit() {
    log('ngOnInit', "Runs once after Angular has initialized all the component's inputs.");
  }

  ngOnChanges() {
    log('ngOnChanges', "Runs every time the component's inputs have changed.");
  }

  ngDoCheck() {
    log('ngDoCheck', 'Runs every time this component is checked for changes.');
  }

  ngAfterContentInit() {
    log('ngAfterContentInit', "Runs once after the component's content has been initialized.");
  }

  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      'Runs every time this component content has been checked for changes.',
    );
  }

  ngAfterViewInit() {
    log('ngAfterViewInit', "Runs once after the component's view has been initialized.");
  }

  ngAfterViewChecked() {
    log('ngAfterViewChecked', "Runs every time the component's view has been checked for changes.");
  }

  ngOnDestroy() {
    log('ngOnDestroy', '	Runs once before the component is destroyed.');
  }

  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRender',
      'Runs once the next time that all components have been rendered to the DOM.',
    );
  });

  afterRender = afterRenderEffect(() => {
    log('afterRender', 'Runs every time all components have been rendered to the DOM.');
  });
}
