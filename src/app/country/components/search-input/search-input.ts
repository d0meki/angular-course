import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'country-search-input',
  imports: [Button, InputTextModule],
  template: ` <section class="flex flex-row gap-2 mt-2">
    <div class="card flex justify-center">
      <input
        type="text"
        pInputText
        #txtSearch
        autofocus
        class="mr-3"
        [placeholder]="placeholder()"
        (keyup.enter)="value.emit(txtSearch.value)"
        (keyup)="inputValue.set(txtSearch.value)"
        [value]="inputValue()"
      />
      <p-button
        (click)="value.emit(txtSearch.value)"
        label="Search"
        icon="pi pi-search"
        iconPos="right"
      />
    </div>
  </section>`,
  styleUrl: './search-input.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {
  placeholder = input('Buscar');
  debounceTime = input(1000);
  initialValue = input<string>();

  value = output<string>();

  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit(value);
    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
