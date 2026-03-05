import { ApplicationConfig, provideBrowserGlobalErrorListeners, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom } from 'rxjs';

import { routes } from './app.routes';

export function initializeValue(translate: TranslateService) {
  return () => {
    const savedLang = localStorage.getItem('selectedLang') || 'uk';
    translate.setDefaultLang('uk');
    return firstValueFrom(translate.use(savedLang));
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    provideHttpClient(),
    provideTranslateHttpLoader({
      prefix: 'assets/i18n/',
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
