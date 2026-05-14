import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  LOCALE_ID,
  signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MeterGroupModule } from 'primeng/metergroup';
import { CardPipeComponent } from '@app/pipes-exercise/componets/card-pipe/card-pipe.component';
import { DividerModule } from 'primeng/divider';
import { Badge } from 'primeng/badge';
import { AvailableLocale, PipeService } from '@app/pipes-exercise/services/pipe.service';
@Component({
  selector: 'pipe-basic-page',
  imports: [CommonModule, ButtonModule, CardModule, MeterGroupModule, DividerModule, Badge],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {
  localeService = inject(PipeService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('freddy domeki');
  nameUpper = signal('FREDDY DOMEKI');
  fullName = signal('FrEDDy DOmEki');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });

  changeLocale(locale: AvailableLocale) {
    console.log({ locale });
    this.localeService.changeLocale(locale);
  }
}
