import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Tittle } from '@app/angular-moderno/shared/tittle/tittle';
import { HeavyLoaderFast } from "@app/angular-moderno/shared/heavy-loader/heavy-loader-fast/heavy-loader-fast";

@Component({
  selector: 'app-defer-options',
    imports: [CommonModule, Tittle, HeavyLoaderFast],
  templateUrl: './defer-options.html',
  styleUrl: './defer-options.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptions {

}
