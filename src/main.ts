import { enableProdMode, NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { CommonModule } from '@angular/common';



if (environment.production) {
  enableProdMode();
}

console.log('Starting')

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
