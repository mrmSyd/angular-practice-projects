import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, pipe, interval, map } from 'rxjs';
import { NaPipe } from './na.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, AsyncPipe, NaPipe, FormsModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  useUpperLowerCase = "Expelliarmus";
  titleCasePipe = "wingardium leviosa";
  currentDate = new Date();
  harrysDetail: any = {
    name: "Harry Potter",
    age: 17,
    house: "Godric Gryffindor",
    father: "James Potter",
    mother: "Lily James Potter",
    godfather: "Sirius Black",
  }
  currentTime: Observable<Date> = new Observable<Date>;
  name = "";

  constructor(){
     this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
}
