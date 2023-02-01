import { Component , Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  @Input() task = { title: '', description: '', selectedPriorityValue:'' };
  @Output() removeTask = new EventEmitter<{ title: string, description: string, selectedPriorityValue:string  }>();
  @Output() editTask = new EventEmitter<{ title: string, description: string, selectedPriorityValue:string  }>();


}
