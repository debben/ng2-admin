import {Component, ViewEncapsulation} from '@angular/core';

// for now just use style loader until the scss is changed for emulated view encapsulation
import 'style!./dashboard.scss';

@Component({
  selector: 'dashboard',
  // encapsulation: ViewEncapsulation.Emulated,
  // styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor() {
  }

}
