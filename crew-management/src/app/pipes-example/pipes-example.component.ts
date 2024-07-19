import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-example.component.html',
  styleUrl: './pipes-example.component.scss'
})
export class PipesExampleComponent {

  today: Date = new Date();
  text : string = "Rahul Kumar Pandey";
  amount : number = 1234.56789;
  percentValue: number= 3.454543;

  jsonVal: object={
    name:"Rahul Kumar",
    version:1
  }

  myArr: number[]=[12,34,56,32,67,89];

  myObject: {[key: string ] : string} = {first:"one", second:"two"};

}
