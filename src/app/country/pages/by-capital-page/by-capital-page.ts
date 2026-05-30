import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  linkedSignal,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { SearchInput } from '@app/country/components/search-input/search-input';
import { CountryList } from '@app/country/components/country-list/country-list';
import { CountryService } from '@app/country/services/country.service';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { map, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [TableModule, SearchInput, CountryList, Toast],
  template: `
    <p-toast />
    <country-search-input
      placeholder="Buscar Por Capital"
      (value)="query.set($event)"
      [initialValue]="query()"
    />

    <country-list
      [countries]="countryResource.hasValue() ? countryResource.value()! : []"
      [errorMessage]="errorMessage()"
      [isEmpty]="isEmpty()"
      [isLoading]="countryResource.isLoading()"
    />
  `,
  styleUrl: './by-capital-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export default class ByCapitalPage {
  private messageService = inject(MessageService);
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = toSignal(
    this.activatedRoute.queryParamMap.pipe(map((params) => params.get('query') ?? '')),
    { initialValue: this.activatedRoute.snapshot.queryParamMap.get('query') ?? '' },
  );

  query = linkedSignal(() => this.queryParam());

  errorMessage = computed((): Error | undefined => {
    const err = this.countryResource.error();
    if (!err) return undefined;
    return err instanceof Error ? err : new Error('Error desconocido');
  });

  isEmpty = computed(() => {
    if (!this.countryResource.hasValue()) return false;
    return this.countryResource.value()!.length === 0;
  });

  constructor() {
    // Creamos un efecto que escuche la señal .error() del recurso
    effect(() => {
      const err = this.countryResource.error();

      if (err) {
        const message = err instanceof Error ? err.message : 'Error desconocido';
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: message,
          life: 5000,
        });

        console.error(err);
      }
    });
  }

  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);
      this.router.navigate(['/dashboard/countries/capital'], {
        queryParams: {
          query: params.query,
        },
      });
      return this.countryService.searchByCapital(params.query);
    },
  });
}

