import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {

  isHarryPresent: boolean = true;
  isRonaldPresent: boolean = true;
  hermioneDoing: string = "";
  hermioneLikes: string = "";
  isDracoAlive: boolean = true;
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

