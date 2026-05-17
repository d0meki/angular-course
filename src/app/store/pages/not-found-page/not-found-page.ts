import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  imports: [],
  template: `<p>not-found-page works!</p>`,
  styleUrl: './not-found-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundPage {}
