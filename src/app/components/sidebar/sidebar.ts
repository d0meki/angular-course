import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, model, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { RippleModule } from 'primeng/ripple';
import { PanelMenuComponent } from '../panel-menu-component/panel-menu-component';
@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    DrawerModule,
    RippleModule,
    PanelMenuComponent,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  visible = model(false);
  private router = inject(Router);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        this.visible.set(false);
      });
  }

  closeCallback(event: any) {
    this.visible.set(false);
  }
}
