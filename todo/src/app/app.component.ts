import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  tasks: { title: string, description: string,  selectedPriorityValue:string }[] = [];

  handleTaskAdded(task: { title: string, description: string,  selectedPriorityValue:string}) {
    this.tasks.push(task);
    console.log(task)
  }

  handleTaskRemoved(task: { title: string, description: string,  selectedPriorityValue:string }) {
    this.tasks = this.tasks.filter(t => t !== task);
    console.log(this.tasks)
  }
}
