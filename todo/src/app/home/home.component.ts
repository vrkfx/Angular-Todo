import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() textBox: string;
  @Input() textInput: string;

  @Input() dropDownlabel: string;
  @Input() selectedPriorityValue: string;
  @Input() dropDownOptions: string[] = [];

  @Input() dropDownlabel2: string;
  @Input() selectedDeadlineValue: string;
  @Input() dropDownOptions2: string[] = [];

  @Input() dateValue: Date;

  @Output() todo: any[] = [];

  newTodo = new FormControl('');
  todoItems = [];


  constructor() {}

  ngOnInit(): void {}

  // onSubmit(value:string, selectedPriorityValue:string){
  //   this.todo.push(value,selectedPriorityValue);
  //   console.log(this.todo)
  // }

  onSubmit() {
    this.todo.push(this.textInput);
    this.todo.push(this.selectedPriorityValue);
    console.log(this.todo);
  }

  addTodo() {
    if (this.newTodo.value.length !== 0) {
      this.todoItems.push(this.newTodo.value);
      this.newTodo.setValue('');
    }
  }
}
