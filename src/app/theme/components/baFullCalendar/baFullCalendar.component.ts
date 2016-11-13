import {Component, ViewChild, ViewEncapsulation, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import './baFullCalendar.loader.ts';

@Component({
  selector: 'ba-full-calendar',
  templateUrl: './baFullCalendar.html',
  encapsulation: ViewEncapsulation.None,
})
export class BaFullCalendar {

  @Input() baFullCalendarConfiguration:Object;
  @Input() baFullCalendarClass:string;
  @Output() onCalendarReady = new EventEmitter<any>();
  
  // make public for when accessed via component.ngfactory
  @ViewChild('baFullCalendar') public _selector:ElementRef;

  ngAfterViewInit() {
    let calendar = jQuery(this._selector.nativeElement).fullCalendar(this.baFullCalendarConfiguration);
    this.onCalendarReady.emit(calendar);
  }
}
