import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() textBox: string
  @Input() textInput: string

  @Input() dropDownlabel: string
  @Input() selectedPriorityValue: string
  @Input() dropDownOptions: string[] = []

  @Input() dropDownlabel2: string
  @Input() selectedDeadlineValue: string
  @Input() dropDownOptions2: string[] = []

  @Input() dateValue: Date

  @Output() todo: any[]

constructor(){}

  ngOnInit():void{

  }

  onSubmit(){
    console.log(this.textInput)
  }

}
