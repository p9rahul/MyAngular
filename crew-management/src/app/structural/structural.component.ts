import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.scss'
})
export class StructuralComponent {

  a=10;
  b=20;
  name="";

  itemsArr =[10,20,30,40,50];

  userRole="admin";

  isActive: boolean= false;
  toggleCheck(){
    this.isActive =!this.isActive;
  }

  bgcolor="lightblue";
  fontSize= 10;
  updateStyle(){
    this.bgcolor="lightcoral";
    this.fontSize=45;
  }
}
