import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  studentForm = new FormGroup({
    studentId: new FormControl('', [Validators.required, Validators.minLength(5)]),
    firstname: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl()
    })
  });

  constructor() {
  }

  ngOnInit() {
  }
  get studentId() {
    return this.studentForm.get('studentId');
  }
  get lastname() {
    return this.studentForm.get('lastname');
  }
  get firstname() {
    return this.studentForm.get('firstname');
  }
  submit() {
    console.log(this.studentForm.value);
  }
}
