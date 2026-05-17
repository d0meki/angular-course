import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import { Paginator, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-pagination',
  imports: [Paginator],
  template: `
    <div class="card flex justify-center">
      <p-paginator
        (onPageChange)="onPageChange($event)"
        [rows]="registrosPorPagina()"
        [totalRecords]="totalRegistros()"
      />
    </div>
    <!-- [rowsPerPageOptions]="[10, 20, 30]" -->
  `,
  styleUrl: './pagination.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  readonly registrosPorPagina = input<number>(0);
  totalRegistros = input<number>(0);
  pageChanged = output<number>();
  onPageChange(event: PaginatorState) {
    const selectedPage = (event.page ?? 0) + 1;
    this.pageChanged.emit(selectedPage);
  }
}
