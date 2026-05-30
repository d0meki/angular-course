import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Button } from 'primeng/button';
import { Avatar } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { Popover } from 'primeng/popover';
import { Utils } from '../../utils/utils';
import { SidebarComponent } from '../sidebar/sidebar';
import { AuthService } from '@app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menubar',
  imports: [CommonModule, Menubar, Button, Avatar, MenuModule, Popover, SidebarComponent, Message],
  templateUrl: './menubar.html',
  styleUrl: './menubar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarComponent {
  items: MenuItem[] | undefined;
  visible = signal(false);
  isDarkTheme = signal(false);

  authService = inject(AuthService);
  router = inject(Router);

  primaryColors = Utils.primaryColors;
  surfaceColors = Utils.surfaceColors;
  ngOnInit() {
    this.items = [
      {
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              this.logout();
            },
          },
        ],
      },
    ];
  }

  toggleDarkMode() {
    this.isDarkTheme.update((val) => !val);
  }

  toggleDrawer() {
    this.visible.update((val) => !val);
  }

  logout() {
    // console.log('precionamos el logout');
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
