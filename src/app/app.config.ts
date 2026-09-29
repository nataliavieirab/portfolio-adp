import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

// Configura a injeção de dependência (providers) da aplicação
export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};
