import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-junk',
  templateUrl: './junk.component.html',
  styleUrls: ['./junk.component.css'],
})
export class JunkComponent {
  title = 'Zmyshenko';
  name = 'Timofey';
  surname = 'Frolov';
  patronymic = 'Sergeyevich';
  birthDate = new Date(1998, 9, 25);
  age = 24;
  schoolName = 'OAO RZD School-internat №25';
  collegeName = 'SFU IMIFI';
  startSchool = new Date(2006, 8, 1);
  endSchool = new Date(2016, 8, 1);
  startCollege = new Date(2016, 8, 1);
  endCollege = new Date(2023, 0, 1);
  schoolPath = `${this.schoolName}: from ${this.startSchool} to ${this.endSchool}`;
  collegePath = `${this.collegeName}: from ${this.startCollege} to ${this.endCollege}`;

  myArr: string[] = [];

  form = new FormGroup({
    text: new FormControl(''),
  });

  ageIncrement() {
    this.age = this.age + 1;
  }

  ageDecrement() {
    this.age = this.age - 1;
  }

  reset() {
    this.age = 24;
  }

  removeChip(clickedElement: string) {
    const currentArrIndex = this.myArr.indexOf(clickedElement);
    this.myArr.splice(currentArrIndex, 1);
  }

  onInput() {
    const value = this.form?.get('text')?.value;
    if (value) {
      this.myArr.push(value);
      this.form?.get('text')?.patchValue('');
    }
  }
}
