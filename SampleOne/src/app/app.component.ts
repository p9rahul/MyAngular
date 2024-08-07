import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, HeaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'SampleOne';
  users = DUMMY_USERS;
  selectedUserId ?: string;  //Use when initial value is not requied
  // selectedUserId = 'u1';  //1. Declare a variable and initilise

  //3. Now Here filter out which user is selected from array or UI 
  // and return to task template html
  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  //2. take the id on this button click event
  onSelectUser(id:string){
    console.log('Selected user with id '+ id);
    this.selectedUserId = id;
  }
}
