import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Button } from 'primeng/button';
import { Avatar } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { Popover } from 'primeng/popover';
import { Utils } from '../../utils/utils';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-menubar',
  imports: [Menubar, Button, Avatar, MenuModule, Popover, SidebarComponent],
  templateUrl: './menubar.html',
  styleUrl: './menubar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarComponent {
  items: MenuItem[] | undefined;
  visible = signal(false);
  isDarkTheme = signal(false);

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
}
