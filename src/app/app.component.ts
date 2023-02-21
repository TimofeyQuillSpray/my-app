import { Component, Input } from '@angular/core';
import { ChipsComponent } from './chips/chips.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Zmyshenko';
  name = 'Timofey';
  surname = 'Frolov';
  patronymic = 'Sergeyevich';
  birthDate = new Date(1998, 9, 25);
  age = 24;
  nameOfSchool = 'OAO RZD School-internat №25';
  nameOfCollege = 'SFU IMIFI';
  startSchool = new Date(2006, 8, 1);
  endSchool = new Date(2016, 8, 1);
  startCollege = new Date(2016, 8, 1);
  endCollege = new Date(2023, 1, 1);
  schoolPath = `${this.nameOfSchool}: from ${this.startSchool} to ${this.endSchool}`;
  collegePath = `${this.nameOfCollege}: from ${this.startCollege} to ${this.endCollege}`;

  myArr: string[] = [];

  ageIncrement() {
    this.age++;
  }

  ageDecrement() {
    this.age--;
  }

  reset() {
    this.age = 24;
  }

  removeChip(clickedElement: string) {
    const currentArrIndex = this.myArr.indexOf(clickedElement);
    this.myArr.splice(currentArrIndex, 1);
  }

  onInput(enterredName: string) {
    this.myArr.push(enterredName);
  }
}
