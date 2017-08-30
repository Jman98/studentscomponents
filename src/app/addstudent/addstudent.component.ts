import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

    studNo: number;
    studFname: string;
    studLname: string;
    studProg: string;
    studYr: number;
    

  constructor() { }

  ngOnInit() {
  }

}
