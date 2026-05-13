import { ChangeDetectionStrategy, Component, inject, linkedSignal } from '@angular/core';
import { SearchInput } from '@app/country/components/search-input/search-input';
import { CountryList } from '@app/country/components/country-list/country-list';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { CountryService } from '@app/country/services/country.service';
import { map, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SearchInput, CountryList],
  template: `
    <country-search-input
      placeholder="Buscar Por Pais"
      (value)="query.set($event)"
      [initialValue]="query()"
    />
    @if (countryResource.isLoading()) {
      <p class="mt-3">Cargando...</p>
    } @else if (countryResource.error()) {
      <p class="mt-3">No se encontro ningun pais con la inicial '{{ query() }}'</p>
    } @else {
      <country-list [countries]="countryResource.hasValue() ? countryResource.value() : []" />
    }
  `,
})
export default class ByCountryPage {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = toSignal(
    this.activatedRoute.queryParamMap.pipe(map((params) => params.get('query') ?? '')),
    { initialValue: this.activatedRoute.snapshot.queryParamMap.get('query') ?? '' },
  );

  query = linkedSignal(() => this.queryParam());
  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);
      this.router.navigate(['/dashboard/countries/pais'], {
        queryParams: {
          query: params.query,
        },
      });
      return this.countryService.searchByCountry(params.query);
    },
  });
}
