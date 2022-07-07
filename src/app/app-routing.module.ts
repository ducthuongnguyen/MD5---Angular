import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListStudentComponent} from './components/list-student/list-student.component';
import {CreateStudentComponent} from './components/create-student/create-student.component';
import {EditStudentComponent} from './components/edit-student/edit-student.component';


const routes: Routes = [{
  path: '',
  children: [{
    path: 'students',
    component: ListStudentComponent
  }, {
    path: 'create',
    component: CreateStudentComponent,
  },
    {
      path: 'edit/:id',
      component: EditStudentComponent,
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
