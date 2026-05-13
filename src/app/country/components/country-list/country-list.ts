import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Country } from '@app/country/interfaces/country.interface';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { Badge } from 'primeng/badge';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [TableModule, Button, Badge, DecimalPipe, RouterLink],
  template: ` <section class="mt-5">
    <div class="card">
      <p-table [value]="countries()" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header>
          <tr>
            <th>#</th>
            <th>Icono</th>
            <th>Bandera</th>
            <th>Nombre</th>
            <th>Capital</th>
            <th>Poblacion</th>
            <th></th>
          </tr>
        </ng-template>
        <ng-template #body let-country>
          <tr>
            <td>{{ country.cca2 }}</td>
            <td>{{ country.flag }}</td>
            <td>
              <img class="w-10" [src]="country.flagSvg" alt="{{ country.flag }}" />
            </td>
            <td>{{ country.name }}</td>
            <td>{{ country.capital }}</td>
            <td><p-badge [value]="country.population | number" severity="warn" /></td>
            <td>
              <p-button
                label="Mas Info"
                link
                [routerLink]="['/dashboard/countries/by/', country.cca2]"
              />
            </td>
          </tr>
        </ng-template>
        <ng-template #footer>
          @if (errorMessage()) {
            <tr>
              <td colspan="7" class="text-center">
                {{ errorMessage()?.message }}
              </td>
            </tr>
          }
          @if (isEmpty() && !isLoading() && !errorMessage()) {
            <tr>
              <td colspan="7" class="text-center">Sin Registros</td>
            </tr>
          }
          @if (isLoading()) {
            <tr>
              <td colspan="7" class="text-center">Buscando...</td>
            </tr>
          }
        </ng-template>
      </p-table>
    </div>
  </section>`,
  styleUrl: './country-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryList {
  countries = input.required<Country[]>();
  errorMessage = input<Error | undefined>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
