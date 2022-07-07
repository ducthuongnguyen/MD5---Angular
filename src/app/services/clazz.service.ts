import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Clazz} from '../models/clazz';

const URL = 'http://localhost:8080/api/classes';

@Injectable({
  providedIn: 'root'
})

export class ClazzService {

  constructor(private http: HttpClient) {
  }

  getAllClass(): Observable<Clazz[]> {
    return this.http.get<Clazz[]>(URL);
  }
}



