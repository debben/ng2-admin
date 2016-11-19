import { Routes, RouterModule }  from '@angular/router';

import { Forms } from './forms.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Forms,
    children: [
      { path: 'inputs', component: Inputs },
      { path: 'layouts', component: Layouts }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
