import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-numbers-page',
  imports: [Card, CommonModule],
  templateUrl: './numbers-page.html',
  styleUrl: './numbers-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumbersPage {
  totalSells = signal(2_433_232.5567);
  percent = signal(0.4856);
}
