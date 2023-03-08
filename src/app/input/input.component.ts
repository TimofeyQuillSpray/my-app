import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Output() inputTextChange = new EventEmitter<string>();
  @Output() textInput = new EventEmitter<any>();

  form = new FormGroup({
    text: new FormControl(''),
  });
  get textControl(): FormControl {
    return this.form.get('text') as FormControl;
  }
  inputName(nameInput: HTMLInputElement) {
    this.inputTextChange.emit(nameInput.value);
    nameInput.value = '';
  }
}
