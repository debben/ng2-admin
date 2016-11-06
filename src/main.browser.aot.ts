/*
 * Angular bootstraping
 */
import { platformBrowser } from '@angular/platform-browser';
import { decorateModuleRef } from './app/environment';
import { bootloader } from '@angularclass/hmr';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModuleNgFamily } from './app/app.module.ngfactory';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowser()
    .bootstrapModuleFactory(AppModuleNgFamily)
    .then(decorateModuleRef)
    .catch(err => console.error(err));

}


bootloader(main);
