import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {
  
  @Input() chips: string[] = [];

  @Output() closeIconClicked = new EventEmitter<string>();

}
