import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  linkedSignal,
  resource,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { SearchInput } from '@app/country/components/search-input/search-input';
import { CountryList } from '@app/country/components/country-list/country-list';
import { CountryService } from '@app/country/services/country.service';
import { Country } from '@app/country/interfaces/country.interface';
import { ToastModule, Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { firstValueFrom, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-by-capital-page',
  imports: [TableModule, SearchInput, CountryList, Toast],
  template: `
    <p-toast />
    <!-- <country-search-input placeholder="Buscar Por Capital" (value)="onSearch($event)" />
    @if (isLoading()) {
      <span>Cargando...</span>
    } @else {
      <country-list [countries]="countries()" />
    } -->
    <country-search-input
      placeholder="Buscar Por Capital"
      (value)="query.set($event)"
      [initialValue]="query()"
    />

    @if (countryResource.isLoading()) {
      <span>Cargando...</span>
    } @else if (countryResource.hasValue()) {
      <country-list [countries]="countryResource.value()" />
    } @else {
      <country-list [countries]="[]" />
    }
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

  constructor() {
    // Creamos un efecto que escuche la señal .error() del recurso
    effect(() => {
      const err = this.countryResource.error();

      if (err) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.message,
          life: 5000,
        });

        console.error(err);
      }
    });
  }
  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async ({ params }) => {
      if (!params.query) return [];
      this.router.navigate(['/dashboard/countries/capital'], {
        queryParams: {
          query: params.query,
        },
      });
      return await firstValueFrom(this.countryService.searchByCapital(params.query));
    },
  });

  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query: string) {
  //   if (this.isLoading()) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(query).subscribe({
  //     next: (countries) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },
  //     error: (err) => {
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(err);
  //       this.messageService.add({ severity: 'error', summary: 'Error', detail: err });
  //     },
  //   });
  // }
}
