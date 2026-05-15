import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-abaout-page',
  imports: [],
  template: `<h1>About Page</h1>
    <hr />`,
  styleUrl: './abaout-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AbaoutPage {}
