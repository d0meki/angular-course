import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Tittle } from '@app/angular-moderno/shared/tittle/tittle';
type Grade = 'A' | 'B' | 'F';
@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Tittle],
})
export default class ControlFlow {
  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
