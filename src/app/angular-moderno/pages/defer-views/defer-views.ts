import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoaderSlow } from "@app/angular-moderno/shared/heavy-loader/heavy-loader-slow/heavy-loader-slow";
import { Tittle } from "@app/angular-moderno/shared/tittle/tittle";

@Component({
  selector: 'app-defer-vierws',
  imports: [HeavyLoaderSlow, Tittle],
  templateUrl: './defer-views.html',
  styleUrl: './defer-views.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViews {}
