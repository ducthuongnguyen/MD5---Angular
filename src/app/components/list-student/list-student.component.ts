import {Component, OnInit} from '@angular/core';
import {Student} from '../../models/student';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Clazz} from '../../models/clazz';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  constructor(private studentService: StudentService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  searchForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });
  students: Student[];
  id: number;
  classes: Clazz[];

  ngOnInit() {
    this.findAllStudent();
  }

  findAllStudent() {
    this.studentService.getAllStudent().subscribe(results => {
      this.students = results;
    }, error => {
      alert(error);
    });
  }

  delete(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      alert('Deleted');
      this.findAllStudent();
    }, error => {
      console.log(error);
    });
  }

  searchByName() {
    const name = this.searchForm.value.name;
    this.studentService.searchByName(name).subscribe(searchResult => {
      this.students = searchResult.content;
    }, error => {
      alert(error);
    });
  }
}
