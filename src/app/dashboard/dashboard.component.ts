import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.router.navigate(['post'], { relativeTo: this.route });
  }

  logout() {
    this.userService.setUser(undefined);
    this.router.navigate(['login']);
  }
}
