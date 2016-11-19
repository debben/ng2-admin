import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: './login/login.module'
  // },
  // {
  //   path: 'register',
  //   loadChildren: './register/register.module'
  // },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule?sync=true' },
      // { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule?sync=true' },
      // //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
      // { path: 'charts', loadChildren: './charts/charts.module' },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule?sync=true' },
      // { path: 'forms', loadChildren: './forms/forms.module' },
      // { path: 'tables', loadChildren: './tables/tables.module' },
      // { path: 'maps', loadChildren: './maps/maps.module' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
