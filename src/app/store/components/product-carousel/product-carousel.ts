import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ProductImagePipe } from '@app/store/pipes/product-image.pipe';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'product-carousel',
  imports: [CarouselModule, ProductImagePipe],
  template: `
    <p-carousel
      [value]="images()"
      [numVisible]="1"
      [numScroll]="1"
      [circular]="false"
      [responsiveOptions]="responsiveOptions()"
    >
      <ng-template let-image #item>
        <div class="border border-surface rounded-border m-2 p-4">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img
                src="{{ image | productImage }}"
                [alt]="image.name"
                class="w-full rounded-border"
              />
            </div>
          </div>
        </div>
      </ng-template>
    </p-carousel>
    <!-- <pre>{{ images() | json }}</pre> -->
  `,
  styleUrl: './product-carousel.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCarousel {
  images = input<string[]>([]);

  responsiveOptions = signal([
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ]);
}
