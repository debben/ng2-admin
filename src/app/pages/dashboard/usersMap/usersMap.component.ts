import {Component, ViewEncapsulation} from '@angular/core';

import {UsersMapService} from './usersMap.service';

// for now just use style loader until the scss is changed for emulated view encapsulation
import 'style!./usersMap.scss';

@Component({
  selector: 'users-map',
  // encapsulation: ViewEncapsulation.Emulated,
  // styleUrls: ['./usersMap.scss'],
  templateUrl: './usersMap.html'
})
export class UsersMap {

  mapData:Object;

  constructor(private _usersMapService:UsersMapService) {
    this.mapData = this._usersMapService.getData();
  }
}
