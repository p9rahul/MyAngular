import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  standalone: true,
  imports: [],
  templateUrl: './signal-component.component.html',
  styleUrl: './signal-component.component.scss'
})
export class SignalComponentComponent {

  // number
  counter = signal(0);
  // String
  userName = signal('Rahul');
  // Array
  users = signal([
    'Rahul',
    'Rakesh',
    'Rajesh'
  ])
  // Object
  videos = signal(
   { title:'My video',
    Desc:'This is a sample video'
  }
  );

  //Signal method
  setCounter(){
    this.counter.set(30);
  }
  //Signal method
  updateCounter(){
    this.counter.update(counter => counter+50);
  }
  //Signal method
  setVideo(){
    this.videos.set({
      "title":"new Title",
      "Desc":"New Desc"
    })
  }
  //Signal method
  constructor(){
    effect(() =>{
      console.log("value of counter :" + this.counter());
      console.log("value of Object :" + this.videos().title);
    })
  }



}
