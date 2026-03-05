import { ApplicationConfig, provideBrowserGlobalErrorListeners, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { routes } from './app.routes';

export function initializeValue(translate: TranslateService) {
  return () => {
    translate.setDefaultLang('uk');
    const savedLang = localStorage.getItem('selectedLang') || 'uk';
    return firstValueFrom(
      translate.use(savedLang).pipe(
        catchError((err) => {
          console.error('Could not load translations:', err);
          return translate.use('uk');
        }),
        catchError(() => of(null))
      )
    );
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    provideHttpClient(),
    provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    }),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateHttpLoader
      },
      defaultLanguage: 'uk'
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeValue,
      deps: [TranslateService],
      multi: true
    }
  ]
};
