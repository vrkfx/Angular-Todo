import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent  {
  @Input() newTask = { title: '', description: '', selectedPriorityValue:'' };
  @Output() taskAdded = new EventEmitter<{ title: string, description: string, selectedPriorityValue: string}>();

  dropDownOptions: string[] = ['Low', 'Medium', 'High'];

  addTask() {
    if(this.newTask.title.length != 0 || this.newTask.description.length != 0 ) {
      this.taskAdded.emit(this.newTask);
      this.newTask = { title: '', description: '', selectedPriorityValue: '' };
      console.log(this.newTask)
    }
  }


}
