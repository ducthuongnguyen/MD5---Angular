import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../../services/student.service';
import {Student} from '../../models/student';
import {Clazz} from '../../models/clazz';
import {ClazzService} from '../../services/clazz.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  students: Student[];
  student: any;
  classes: Clazz[] = [];
  // @ts-ignore
  studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    score: new FormControl(),
    age: new FormControl(),
    clazzId: new FormControl(),
  });

  constructor(private studentService: StudentService,
              private clazzService: ClazzService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.clazzService.getAllClass().subscribe(data => {
      this.classes = data;
      console.log(this.classes);
    }, error => {
      alert(error);
    });
  }

  onSubmit() {
    this.student = {
      name: this.studentForm.value.name,
      score: this.studentForm.value.score,
      age: this.studentForm.value.age,
      clazz: {
        id: this.studentForm.value.clazzId,
      }
    };
    this.studentService.saveStudent(this.student).subscribe(() => {
      this.studentForm.reset();
      alert('Created!!');
      this.router.navigate(['/students']);
    }, error => {
      alert(error);
    });
  }

  load() {
    this.studentService.getAllStudent().subscribe(results => {
      this.students = results;
    }, error => {
      alert(error);
    });
  }
}
