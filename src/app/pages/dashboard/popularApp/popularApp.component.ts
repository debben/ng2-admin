import {Component, ViewEncapsulation} from '@angular/core';

// for now just use style loader until the scss is changed for emulated view encapsulation
import 'style!./popularApp.scss';

@Component({
  selector: 'popular-app',
  // encapsulation: ViewEncapsulation.Emulated,
  // styleUrls: ['./popularApp.scss'],
  templateUrl: './popularApp.html'
})
export class PopularApp {

  ngOnInit() {
  }
}
