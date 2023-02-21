import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {

  faCircleXmark = faCircleXmark
  
  @Input() chips: string[] = [];

  @Output() closeIconClicked = new EventEmitter<string>();

}
