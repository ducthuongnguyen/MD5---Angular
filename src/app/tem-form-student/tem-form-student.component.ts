import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tem-form-student',
  templateUrl: './tem-form-student.component.html',
  styleUrls: ['./tem-form-student.component.scss']
})
export class TemFormStudentComponent implements OnInit {
  student = {
    studentCode: 'SV-011',
    studentName: 'Thuong huong',
    studentAddress: 'Hai Duong1'
  };

  constructor() {
  }

  ngOnInit() {
  }

  submit(createStudentForm: NgForm) {
    console.log(createStudentForm.value);
    // console.log(this.student);
  }
}
