import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule?sync=true'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule?sync=true'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule?sync=true' },
      { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule?sync=true' },
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule?sync=true' }
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule?sync=true' },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule?sync=true' },
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule?sync=true' },
      // { path: 'tables', loadChildren: './tables/tables.module' },
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule?sync=true' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
