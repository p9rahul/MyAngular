import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrewMembersComponent } from './crew-members/crew-members.component';
import { CrewComponent } from './crew/crew.component';
import { UsersModule } from './users/users.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CrewMembersComponent,CrewComponent,UsersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crew-management';
}
