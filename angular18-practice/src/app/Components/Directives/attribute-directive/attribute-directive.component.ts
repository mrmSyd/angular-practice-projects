import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
 
  bgHouseColor = "bg-primary";
  isGreenHouse = false;
  studentList: any[] = [
    { name: 'Harry Potter', house: 'Godric Gryffindor', isCaptain: false, marks: 50},
    { name: 'Ronald Weasley', house: 'Godric Gryffindor', isCaptain: false, marks: 45 },
    { name: 'Hermione Granger', house: 'Godric Gryffindor', isCaptain: false, marks: 98 },
    { name: 'Draco Malfoy', house: 'Salazar Slytherin', isCaptain: true, marks: 75 },
    { name: 'Luna Lovegood', house: 'Rowena Ravenclaw', isCaptain: false, marks: 80 },
    { name: 'Cedric Diggory', house: 'Helga Hufflepuff', isCaptain: true, marks: 85 },
  ]
  customStyle: any = {
    'color': 'white',
    'background-color': 'lavender',
    'width': '100px',
    'height': '100px',
    'font-size': '25px',
    'border': '2px solid black'
  }

  changeHouse(){
    this.bgHouseColor = "bg-success";
  }

  changeBgColor(){
    this.isGreenHouse = !this.isGreenHouse;
  }
}
