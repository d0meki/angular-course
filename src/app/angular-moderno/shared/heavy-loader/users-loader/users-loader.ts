import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users-loader',
  imports: [],
  template: `<p>users-loader works!</p>`,
  styleUrl: './users-loader.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersLoader {}
