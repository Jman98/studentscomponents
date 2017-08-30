import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { DisplaystudentComponent } from './displaystudent/displaystudent.component';
import { MainstudentComponent } from './mainstudent/mainstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    ListstudentComponent,
    DisplaystudentComponent,
    MainstudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
