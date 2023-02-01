import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  dropDownOptions: string[] = ['Low', 'Medium', 'High'];

  tasks: { title: string, description: string,  selectedPriorityValue:string }[] = [];

  handleTaskAdded(task: { title: string, description: string,  selectedPriorityValue:string}) {
    this.tasks.push(task);
    console.log(task)
  }

  handleTaskRemoved(task: { title: string, description: string,  selectedPriorityValue:string }) {
    this.tasks = this.tasks.filter(t => t !== task);
    console.log(this.tasks)
  }

  handleTaskEdit(task: { title: string, description: string,  selectedPriorityValue:string}) {
    task.title = prompt('Task Name:', task.title);
    task.description = prompt('Edit Description:', task.description);
    task.selectedPriorityValue = prompt('Task Priority (Insert - High, Medium, Low):', task.selectedPriorityValue);
   // console.log(this.tasks)
  }
}
