import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'SampleOne';
  users = DUMMY_USERS;
  selectedUserId?: string; //used for task component

  //used for task component
  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id:string){
    console.log('Selected user with id '+ id);
    this.selectedUserId =id;
  }
}
