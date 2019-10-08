import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.loginService.getUserByUsername(this.username).subscribe(result => {
      console.log(result);
      if (result && result.length > 0) {
        this.loginService.setUser(result[0]);
        this.router.navigate(['dashboard']);
      } else {
        alert('User not found');
      }
    });
  }
}
