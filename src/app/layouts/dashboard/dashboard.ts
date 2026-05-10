import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenubarComponent } from '../../components/menubar/menubar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [MenubarComponent, RouterOutlet],
  template: `
    <app-menubar />
    <router-outlet />
  `,
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {}
