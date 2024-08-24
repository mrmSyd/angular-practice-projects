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

  changeHouse(){
    this.bgHouseColor = "bg-success";
  }

  changeBgColor(){
    this.isGreenHouse = !this.isGreenHouse;
  }
}
