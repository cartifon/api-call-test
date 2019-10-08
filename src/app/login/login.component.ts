import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  login() {
    this.loginService.getUserByUsername(this.username).subscribe(result => {
      console.log(result);
      if (result && result.length > 0) {
        this.loginService.setUser(result);
      } else {
        alert('User not found');
      }
    });
  }
}
