import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';

const API_URL = 'http://localhost:8080/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(API_URL);
  }

  save(post): Observable<Post> {
    // @ts-ignore
    return this.httpClient.post<Post>(API_URL, post);
  }

  findById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${API_URL}/${id}`);
  }

  delete(id: number): Observable<Post> {
    return this.httpClient.delete<Post>(`${API_URL}/${id}`);
  }
}
