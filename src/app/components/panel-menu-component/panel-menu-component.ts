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
    {
      label: 'Countries',
      icon: 'pi pi-folder',
      items: [
        {
          label: 'Capital',
          icon: 'pi pi-flag',
          routerLink: '/dashboard/countries/capital',
        },
        {
          label: 'Pais',
          icon: 'pi pi-map',
          routerLink: '/dashboard/countries/pais',
        },
        {
          label: 'Region',
          icon: 'pi pi-slack',
          routerLink: '/dashboard/countries/region',
        },
      ],
    },
    {
      label: 'Pipes',
      icon: 'pi pi-folder',
      items: [
        {
          label: 'Basic',
          icon: 'pi pi-palette',
          routerLink: '/dashboard/pipes/basic',
        },
        {
          label: 'Numbers',
          icon: 'pi pi-calculator',
          routerLink: '/dashboard/pipes/numbers',
        },
        {
          label: 'Uncommon',
          icon: 'pi pi-globe',
          routerLink: '/dashboard/pipes/uncommon',
        },
        {
          label: 'Custom',
          icon: 'pi pi-filter',
          routerLink: '/dashboard/pipes/custom',
        },
      ],
    },
    {
      label: 'Reactive',
      icon: 'pi pi-folder',
      items: [
        {
          label: 'Basic',
          icon: 'pi pi-palette',
          routerLink: '/dashboard/reactive/basic',
        },
        {
          label: 'Dynamic',
          icon: 'pi pi-sitemap',
          routerLink: '/dashboard/reactive/dynamic',
        },
        {
          label: 'Switches',
          icon: 'pi pi-power-off',
          routerLink: '/dashboard/reactive/switches',
        },
        {
          label: 'Country',
          icon: 'pi pi-map',
          routerLink: '/dashboard/reactive/country',
        },

        {
          label: 'Register',
          icon: 'pi pi-user',
          routerLink: '/dashboard/reactive/register',
        },
      ],
    },
    {
      label: 'Lifecycle',
      icon: 'pi pi-folder',
      items: [
        {
          label: 'Home',
          icon: 'pi pi-palette',
          routerLink: '/dashboard/lifecycle/home',
        },
        {
          label: 'About',
          icon: 'pi pi-map',
          routerLink: '/dashboard/lifecycle/about',
        },
        {
          label: 'Contact',
          icon: 'pi pi-sitemap',
          routerLink: '/dashboard/lifecycle/contact',
        },
      ],
    },
    {
      label: 'Maps',
      icon: 'pi pi-folder',
      items: [
        {
          label: 'Fullscreen Map',
          icon: 'pi pi-palette',
          routerLink: '/dashboard/maps/fullscreen-map',
        },
        {
          label: 'Markers',
          icon: 'pi pi-map',
          routerLink: '/dashboard/maps/markers',
        },
        {
          label: 'Houses',
          icon: 'pi pi-sitemap',
          routerLink: '/dashboard/maps/houses',
        },
      ],
    },
  ]);
}
