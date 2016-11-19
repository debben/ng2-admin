import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Register } from './register.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Register
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
