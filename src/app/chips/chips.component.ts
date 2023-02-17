import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {
  
  @Input() text = '';
  @Input() chips: string[] = ['chip1', 'chip2', 'chip3', 'chip4'];

  @Output() closeIconClicked = new EventEmitter<string>();

}
