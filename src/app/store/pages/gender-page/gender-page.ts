import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@app/store/services/products.service';
import { map } from 'rxjs';
import { ProductCardComponent } from '@app/store/components/product-card/product-card.component';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent],
  templateUrl: './gender-page.html',
  styleUrl: './gender-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GenderPage {
  route = inject(ActivatedRoute);
  productsService = inject(ProductsService);

  gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)));

  productsResource = rxResource({
    params: () => ({ gender: this.gender() }),
    stream: ({ params }) => {
      return this.productsService.getProducts({
        gender: params.gender,
      });
    },
  });
}
