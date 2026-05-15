import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  imports: [],
  template: `<h1>Contact Page</h1>
    <hr />`,
  styleUrl: './contact-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPage {}
