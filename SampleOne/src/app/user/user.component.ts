import { Component, Input, Output,EventEmitter, output,input} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  /*
  // Code -1 Option -1 Zone.js angular 2 onwards
    selectedUser=DUMMY_USERS[randomIndex];
 
   //pass this computed function to template 
   get imagePath(){
     return 'assets/users/' + this.selectedUser.avatar;
   }
 
   onSelectedUser(){
     console.log("Clicked !!");
     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
     this.selectedUser =DUMMY_USERS[randomIndex];
 
   } 
     
   */

  /* 
  // =====================================
  // Code -2 Using signal option -2 Since Angular 16
  // - Use to maintain state management in more efficent way
  //   1.import in angular core
  //   2.initize signal
  //   3.change value of signal using set()
  //   4. call this signal () in template using onSelectedUser() function 
  //     -> not Interpolation  way 1 way data binding
  //   5.Changed computed in html file make function 

  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  //pass this getter function to template - this compute way doesn't work with signal , so use above line
  //  get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // } 

  onSelectedUser() {
    console.log("Clicked !!");
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  } */

  // Code -3  =====================================
  // Data Bind Using signal input ->Option -1 Zone.js angular 2 onwards
  // using decorator -> old way data bind -> not signal way this is new way
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // #Now convert to "user object" type-> Simply
  @Input({required:true}) user!:{
    id:string;
    avatar: string;
    name: string;
  };


  @Output() selectVarEvent = new EventEmitter<string>(); //use for output when button select
  //Output using output() function == is internally calls EventEmitter and works in same way
  // Why to use when decorator @Output exist - if you don't want to @ dcotorator for input sinal look below code
  // selectVarEvent = output<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  // or use this //input signal -> this is read only can't be change fromoutside
  // avatar1 = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());


  onSelectUser() {
    // console.log("Clicked !!");
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];

    this.selectVarEvent.emit(this.user.id);
  }



}
