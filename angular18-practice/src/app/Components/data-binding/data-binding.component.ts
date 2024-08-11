import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  empName: string = "Albert";
  inputTypeText: string = "text";
  inputPlaceHolder: string = "Enter your Name";
  inputTextClass: string = "primary-text";
  houseName: string = "";
  signalName = signal("Hermione");
  constructor(){
    
  }

  showPopup(alertMsg: String){
    alert(alertMsg);
  }

  changeEmployeeName(){
    this.empName = "Minerva";
  }

  changeSignalName(){
    this.signalName.set(this.empName);
  }
}
