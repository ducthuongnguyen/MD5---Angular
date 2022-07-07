import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ListStudentComponent } from './components/list-student/list-student.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListClassComponent } from './components/list-class/list-class.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    CreateStudentComponent,
    ListClassComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
