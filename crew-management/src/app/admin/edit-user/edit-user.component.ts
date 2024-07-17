import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {

  //
  adminName: string = "Property one way bind";

  //Property Binding
  urlGoogle: string ='http://google.com';

  // Event Binding
  className : string ="c1";
  bindButtonClick(){
    console.log("Event Bind button clicked");
    this.className=this.className === 'c1' ? 'c2' :'c1';
  }
  // Event Binding
  captureValue(event :any){
    console.log(event.key);
  }
}
