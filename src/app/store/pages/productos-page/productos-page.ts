import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Card } from 'primeng/card';
import { ProductTable } from '@app/store/components/product-table/product-table';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@app/store/services/products.service';
import { PaginationComponent } from '@app/shared/components/pagination/pagination.component';

@Component({
  selector: 'app-productos',
  imports: [Card, ProductTable, PaginationComponent],
  templateUrl: './productos-page.html',
  styleUrl: './productos-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductosPage {
  productsService = inject(ProductsService);
  paginationService = inject(ProductsService);

  productsPerPage = signal(10);
  pagina = signal<number>(1);

  handleOffsetPage(page: number) {
    this.pagina.set(page);
  }
  productsResource = rxResource({
    params: () => ({
      page: this.pagina(),
      limit: this.productsPerPage(),
    }),
    stream: ({ params }) => {
      return this.productsService.getProducts({
        offset: params.page,
        limit: params.limit,
      });
    },
  });
}
