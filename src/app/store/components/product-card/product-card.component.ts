import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { Product } from '@app/store/interfaces/product.interface';
import { TagModule, Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ProductImagePipe } from '@app/store/pipes/product-image.pipe';
@Component({
  selector: 'product-card',
  imports: [Card, Button, RouterLink, Tag, CommonModule, ProductImagePipe],
  template: `<p-card class="animate-fadeIn">
    <ng-template #header>
      <img alt="Card" class="w-full" src="{{ product().images | productImage }}" />
    </ng-template>
    <ng-template #title> {{ product().title }} </ng-template>
    <ng-template #subtitle> {{ product().gender }} - {{ product().price | currency }} </ng-template>
    <p>
      {{ product().description | slice: 0 : 70 }}
    </p>
    <ng-template #footer>
      @for (size of product().sizes; track $index) {
        <p-tag class="mr-2" [value]="size" severity="warn" />
      }
      <p-button
        label="Ver Producto"
        [routerLink]="['/dashboard/store/product/', product().slug]"
        link
      />
    </ng-template>
  </p-card>`,
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<Product>();

  imageUrl = computed(() => {
    return `http://localhost:3000/api/files/product/${this.product().images[0]}`;
  });
}
