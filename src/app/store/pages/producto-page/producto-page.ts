import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '@app/store/services/products.service';
import { map } from 'rxjs';
import { ProductDetailsComponent } from '@app/store/components/product-details/product-details';

@Component({
  selector: 'app-producto-page',
  imports: [ProductDetailsComponent],
  template: `@if (productResource.isLoading()) {
      <div class="flex justify-center items-center h-screen">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
    }
    <!--  -->

    @if (productResource.hasValue()) {
      <!-- Producto -->
      <product-details-component [product]="productResource.value()!" />
    }`,
  styleUrl: './producto-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductoPage {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  productService = inject(ProductsService);

  productId = toSignal(this.activatedRoute.params.pipe(map((params) => params['id'])));

  productResource = rxResource({
    params: () => ({ id: this.productId() }),
    stream: ({ params }) => {
      return this.productService.getProductById(params.id);
    },
  });

  redirectEffect = effect(() => {
    if (this.productResource.error()) {
      this.router.navigate(['/admin/products']);
    }
  });
}
