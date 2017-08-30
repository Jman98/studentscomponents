import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-displaystudent',
  templateUrl: './displaystudent.component.html',
  styleUrls: ['./displaystudent.component.css']
})
export class DisplaystudentComponent implements OnInit {
@Output() printThis = new EventEmitter<any>();
flag='';


DisplayStudents(){
this.printThis.emit({mode: this.flag});

}
  constructor() { }

  ngOnInit() {
  }

}
