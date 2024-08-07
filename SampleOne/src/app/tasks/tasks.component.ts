import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  //step1 - takes this input from app component
  @Input({required :true}) name!:string;

  //Relate the task that belongs to a user
  @Input({required :true}) userId!:string;
  
  isAddingTask = false;

  //tasks array object
  tasks =[
    {
      id:"t1",
      userId:'u1',
      title:'Task1',
      summary:'This is task 1',
      dueDate:'2024-12-31'
    },{
      id:"t2",
      userId:'u2',
      title:'Task2',
      summary:'This is task 2',
      dueDate:'2024-12-31'
    },
    {
      id:"t3",
      userId:'u2',
      title:'Task3',
      summary:'This is task 3',
      dueDate:'2024-12-31'
    }
  ]

  //getter function to get tasks , filter out
  get selectedUsertasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }


  // retrun flase to drop the task 
  onCompleteTask(id:string){
    console.log(id);
    console.log(this.tasks);

    this.tasks = this.tasks.filter((task)=> task.id !== id);
    console.log(this.tasks);
  }


  // falg will be true when it is called
  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  //task data we receive on this method
  onAddTask(taskData : NewTaskData){
    //push or unshift to show in 1st place in list
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId:this.userId,
      title: taskData.title,
      summary : taskData.summary,
      dueDate: taskData.date
    })

    this.isAddingTask =false; // to close the task popup
  }
}
