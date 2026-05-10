import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
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
        ],
      },
    ];
  }
}
