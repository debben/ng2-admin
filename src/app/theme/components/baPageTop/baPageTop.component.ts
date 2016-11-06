import {Component, ViewEncapsulation} from '@angular/core';

import {GlobalState} from '../../../global.state';

@Component({
  selector: 'ba-page-top',
  styleUrls: ['./baPageTop.scss'],
  templateUrl: './baPageTop.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:GlobalState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
