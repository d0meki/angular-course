import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '@app/gifs/services/gifs.service';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RippleModule } from 'primeng/ripple';
@Component({
  selector: 'app-panel-menu-component',
  imports: [CommonModule, BadgeModule, PanelMenuModule, RippleModule, RouterLink, RouterLinkActive],
  templateUrl: './panel-menu-component.html',
  styleUrl: './panel-menu-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelMenuComponent {
  private gifService = inject(GifsService);

  items = computed<MenuItem[]>(() => [
    {
      label: 'Bases',
      icon: 'pi pi-folder',
      items: [
        {
          label: 'Counter',
          icon: 'pi pi-plus',
          routerLink: '/dashboard/bases/counter',
        },
        {
          label: 'Hero',
          icon: 'pi pi-star',
          routerLink: '/dashboard/bases/hero',
        },
        {
          label: 'Dragon Ball V1',
          icon: 'pi pi-user',
          routerLink: '/dashboard/bases/dbzv1',
        },
        {
          label: 'Dragon Ball V2',
          icon: 'pi pi-user',
          routerLink: '/dashboard/bases/dbzv2',
        },
      ],
    },
    {
      label: 'Gifs',
      icon: 'pi pi-folder',
      items: [
        {
          label: 'Lista de Gifs',
          icon: 'pi pi-image',
          routerLink: '/dashboard/gifs/lista-gifs',
        },
        {
          label: 'Buscar Gifs',
          icon: 'pi pi-search',
          routerLink: '/dashboard/gifs/search-gifs',
        },
        {
          label: 'Historial de Gifs',
          icon: 'pi pi-history',
          items: this.gifService.searchHistoryKeys().map((query) => ({
            label: query,
            icon: 'pi pi-search',
            routerLink: `/dashboard/gifs/history/${query}`,
          })),
        },
      ],
    },
  ]);
}
