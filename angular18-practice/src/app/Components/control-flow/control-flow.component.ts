import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  isHarryPresent: boolean = true;
  isRonaldPresent: boolean = true;
  hermioneDoing: string = "";
  hermioneLikes: string = "";
  isDracoAlive: boolean = true;
  houseNameDdl = "";

  houseList: string [] = ['Godric Gryffindor', 'Salazar Slytherin', 'Rowena Ravenclaw', 'Helga Hufflepuff'];
  studentList: any[] = [
    { name: 'Harry Potter', house: 'Godric Gryffindor', isCaptain: false },
    { name: 'Ronald Weasley', house: 'Godric Gryffindor', isCaptain: false },
    { name: 'Hermione Granger', house: 'Godric Gryffindor', isCaptain: false },
    { name: 'Draco Malfoy', house: 'Salazar Slytherin', isCaptain: true },
    { name: 'Luna Lovegood', house: 'Rowena Ravenclaw', isCaptain: false },
    { name: 'Cedric Diggory', house: 'Helga Hufflepuff', isCaptain: true },
  ]

  showHarry(){
    this.isHarryPresent = true;
  }
  hideHarry(){
    this.isHarryPresent = false;
  }
  toggleRonald(){
    this.isRonaldPresent = !this.isRonaldPresent;
  }
}
