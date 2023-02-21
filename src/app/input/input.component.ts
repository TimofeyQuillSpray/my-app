import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Output() inputTextChange = new EventEmitter<string>();

  inputName(nameInput: HTMLInputElement) {
    this.inputTextChange.emit(nameInput.value);
    nameInput.value = '';
  }
}
