import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { SmartTables } from './components/smartTables/smartTables.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'basictables', component: BasicTables },
      { path: 'smarttables', component: SmartTables }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
