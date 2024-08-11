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

