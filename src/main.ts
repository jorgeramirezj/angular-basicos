import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Indica el ambiente en el que está corriendo
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
