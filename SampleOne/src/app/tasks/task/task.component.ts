import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Task } from './task.model';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  //1.Now tasks html templete will pass data to task component
  //2. And bind this task to tasks componet
  //3. Pass this task to task templated to show
  @Input({required: true}) task!: Task;

  // 1. To emit our own custom event there in parent component -> tasks compo
  // 2. Add a method and share some information to parent component 
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }


}
