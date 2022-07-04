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
    firstname: new FormControl('', [Validators.required]),
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
  get studentId() {
    return this.studentForm.get('studentId');
  }
  submit() {
    console.log(this.studentForm.value);
  }
}
