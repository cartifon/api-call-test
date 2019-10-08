import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: any;

  constructor(private http: HttpClient) {}

  getUserByUsername(username): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users?username=' + username);
  }

  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
}
