import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../models/student';

const API_URL = 'http://localhost:8080/api/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(API_URL);
  }

  saveStudent(student): Observable<Student> {
    return this.http.post<Student>(API_URL, student);
  }

  // @ts-ignore
  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(`${API_URL}/${id}`);
  }

  searchByName(name: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${API_URL}/search-by-name?name=${name}`);
  }

  findById(id: number): Observable<Student> {
    return this.http.get<Student>(`${API_URL}/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${API_URL}/${id}`, student);
  }
}
