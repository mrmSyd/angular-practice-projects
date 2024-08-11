import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  empName: String = "Albert";
  inputTypeText: String = "text";
  inputPlaceHolder: String = "Enter your Name"
  inputTextClass: String = "primary-text"
  constructor(){
    
  }

  showPopup(){
    alert("Yeah! You've just performed event binding.");
  }
}
