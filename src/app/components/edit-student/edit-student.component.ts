import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ClazzService} from '../../services/clazz.service';
import {Clazz} from '../../models/clazz';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  id: number;
  obj: any;
  editForm: FormGroup = new FormGroup({
    name: new FormControl(),
    score: new FormControl(),
    age: new FormControl(),
    clazzId: new FormControl(),
  });
  listClazz: Clazz[];

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private clazzService: ClazzService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.findById(this.id);
    });
  }

  ngOnInit(): void {
    this.clazzService.getAllClass().subscribe(data => {
      this.listClazz = data;
    }, error => {
      console.log(error);
    });
  }

  findById(id: number) {
    return this.studentService.findById(id).subscribe(student => {
      // tslint:disable-next-line:no-shadowed-variable
      // this.editForm.setValue(student);
      this.editForm = new FormGroup({
        name: new FormControl(student.name),
        score: new FormControl(student.score),
        age: new FormControl(student.age),
        clazzId: new FormControl(student.clazz.id),
      });
    }, error => {
      alert(error);
    });
  }

  updateStudent() {
    this.obj = {
      name: this.editForm.value.name,
      score: this.editForm.value.score,
      age: this.editForm.value.age,
      clazz: {
        // @ts-ignore
        id: this.editForm.value.clazzId,
      },
    };
    this.studentService.updateStudent(this.id, this.obj).subscribe(() => {
      alert('Updated!!');
      // @ts-ignore
      this.router.navigate(['/students']);
    }, error => {
      console.log(error);
    });
  }
}
