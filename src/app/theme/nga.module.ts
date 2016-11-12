import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  BaThemeConfig
} from './theme.config';

import {
  BaThemeConfigProvider
} from './theme.configProvider';

// import { BaAmChart } from './components/baAmChart/baAmChart.component';
import { BaBackTop } from './components/baBackTop/baBackTop.component';
// import { BaCard } from './components/baCard/baCard.component';
// import { BaChartistChart } from './components/baChartistChart/baChartistChart.component';
// import { BaCheckbox } from './components/baCheckbox/baCheckbox.component';
import { BaContentTop } from './components/baContentTop/baContentTop.component';
// import { BaFullCalendar } from './components/baFullCalendar/baFullCalendar.component';
import { BaMenuItem } from './components/baMenu/components/baMenuItem/baMenuItem.component';
import { BaMenu } from './components/baMenu/baMenu.component';
import { BaMsgCenter } from './components/baMsgCenter/baMsgCenter.component';
// import { BaMultiCheckbox } from './components/baMultiCheckbox/baMultiCheckbox.component';
import { BaPageTop } from './components/baPageTop/baPageTop.component';
// import { BaPictureUploader } from './components/baPictureUploader/baPictureUploader.component';
import { BaSidebar } from './components/baSidebar/baSidebar.component';
// import { BaCardBlur } from './components/baCard/baCardBlur.directive';

// import { BaScrollPosition } from './directives/baScrollPosition/baScrollPosition.directive';
// import { BaSlimScroll } from './directives/baSlimScroll/baSlimScroll.directive';
// import { BaThemeRun } from './directives/baThemeRun/baThemeRun.directive';

// import { BaAppPicturePipe } from './pipes/baAppPicture/baAppPicture.pipe';
// import { BaKameleonPicturePipe } from './pipes/baKameleonPicture/baKameleonPicture.pipe';
import { BaProfilePicturePipe } from './pipes/baProfilePicture/baProfilePicture.pipe';

import { BaImageLoaderService } from './services/baImageLoader/baImageLoader.service';
import { BaThemePreloader } from './services/baThemePreloader/baThemePrealoader.service';
import { BaThemeSpinner } from './services/baThemeSpinner/baThemeSpinner.service';

import { EmailValidator } from './validators/email.validator';
import { EqualPasswordsValidator } from './validators/equalPasswords.validator';

const NGA_COMPONENTS = [
  // BaAmChart,
  BaBackTop,
  // BaCard,
  // BaChartistChart,
  // BaCheckbox,
  BaContentTop,
  // BaFullCalendar,
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  // BaMultiCheckbox,
  BaPageTop,
  // BaPictureUploader,
  BaSidebar
];

const NGA_DIRECTIVES = [
  // BaScrollPosition,
  // BaSlimScroll,
  // BaThemeRun,
  // BaCardBlur
];

const NGA_PIPES = [
  // BaAppPicturePipe,
  // BaKameleonPicturePipe,
  BaProfilePicturePipe
];

const NGA_SERVICES = [
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner
];

const NGA_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator
];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ]
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        BaThemeConfigProvider,
        BaThemeConfig,
        ...NGA_VALIDATORS,
        ...NGA_SERVICES
      ],
    };
  }
}
