import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@app/store/services/products.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Card } from 'primeng/card';
import { Divider } from 'primeng/divider';
import { ProductCarousel } from '@app/store/components/product-carousel/product-carousel';

@Component({
  selector: 'app-product-page',
  imports: [ProgressSpinnerModule, Card, Divider, ProductCarousel],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductPage {
  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);

  productIdSlug = this.activatedRoute.snapshot.params['idSlug'];

  productResource = rxResource({
    params: () => ({ idSlug: this.productIdSlug }),
    stream: ({ params }) => this.productService.getProductByIdSlug(params.idSlug),
  });
}
