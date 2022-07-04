import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  studentForm = new FormGroup({
    studentId: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl()
    })
  });

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.studentForm.value);
  }
}
