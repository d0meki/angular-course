import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '@app/store/components/product-card/product-card.component';
import { ProductsService } from '@app/store/services/products.service';
import { PaginationComponent } from '@app/shared/components/pagination/pagination.component';

@Component({
  selector: 'app-store-home-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './store-home-page.html',
  styleUrl: './store-home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StoreHomePage {
  productsService = inject(ProductsService);
  pagina = signal<number>(1);

  handleOffsetPage(page: number) {
    this.pagina.set(page);
  }

  productsResource = rxResource({
    params: () => ({ offset: this.pagina() }),
    stream: () => {
      return this.productsService.getProducts({ offset: this.pagina() });
    },
  });
}
