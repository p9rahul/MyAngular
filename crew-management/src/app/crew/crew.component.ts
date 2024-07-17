import { Component } from '@angular/core';
import { CrewDesignationsComponent } from '../crew-designations/crew-designations.component';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CrewDesignationsComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {
messageForComponent: string = "Hello crew parent componet From parent to child";

//child to parent
recMsg:string="";

receivingMessage(message:string):void{
this.recMsg=message;
}
}
