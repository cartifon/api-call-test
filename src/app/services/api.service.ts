import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUserByUsername(username): Observable<any> {
    return this.http.get(`${this.baseUrl}/users?username=${username}`);
  }

  getPostsByUserId(userId) {
    return this.http.get(`${this.baseUrl}/posts?userId=${userId}`);
  }

}