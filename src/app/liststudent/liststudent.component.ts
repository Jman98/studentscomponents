import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
@Output() ListStudents = new EventEmitter<any>();
flag;

listStudents(){

}

  constructor() { }

  ngOnInit() {
  }
   
}
