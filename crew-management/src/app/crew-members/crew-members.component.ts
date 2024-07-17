import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-crew-members',
  standalone: true,
  imports: [],
  templateUrl: './crew-members.component.html',
  styleUrl: './crew-members.component.scss'
})
export class CrewMembersComponent {
 
  @Input() message: String="";
}
