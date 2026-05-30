import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';

import { PipeService } from './pipes-exercise/services/pipe.service';

import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import localEn from '@angular/common/locales/en';
import { authInterceptor } from './auth/interceptor/auth.interceptor';
import { loggingInterceptor } from './auth/interceptor/loggin.interceptor';

registerLocaleData(localEs);
registerLocaleData(localFr);
registerLocaleData(localEn);

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch(), withInterceptors([loggingInterceptor, authInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
        // onViewTransitionCreated( transitionInfo ) {
        //   console.log({transitionInfo});
        // },
      }),
    ),
    // HashStrategy
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    // LOCALE_ID para que PrimeNG use español en fechas y números
    {
      provide: LOCALE_ID,
      // useValue: 'es',
      deps: [PipeService],
      useFactory: (pipeService: PipeService) => pipeService.getLocale,
    },
  ],
};
