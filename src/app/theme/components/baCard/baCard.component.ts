import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'ba-card',
  styleUrls: ['./baCard.scss'],
  templateUrl: './baCard.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class BaCard {
  @Input() title:String;
  @Input() baCardClass:String;
}
