import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product, ProductsResponse } from '@app/store/interfaces/product.interface';
import { ProductImagePipe } from '@app/store/pipes/product-image.pipe';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { Badge } from 'primeng/badge';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'product-table',
  imports: [
    TableModule,
    ProductImagePipe,
    RouterLink,
    CommonModule,
    Checkbox,
    Badge,
    Button
],
  templateUrl: './product-table.html',
  styleUrl: './product-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTable {
    products = input.required<Product[]>();
}
