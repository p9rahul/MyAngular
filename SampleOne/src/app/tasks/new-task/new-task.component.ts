import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData, Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  // void - Becaseu don't want to emit any data
  @Output() cancel = new EventEmitter<void>();

  //Here entered data will move from templated or UI to component as an object
  // We can outsource this in another file this Object -> interface
  // @Output() add =new EventEmitter<{title:string; summary:string; date:string;}>();
  @Output() add =new EventEmitter<NewTaskData>();
  
  
  //Create a property that will store the title value from Form
  enteredTitle='';
  enteredSummary='';
  entertedDate='';

  onCancel(){
    this.cancel.emit();
  }

  onSumit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.entertedDate
    });
  }
}
