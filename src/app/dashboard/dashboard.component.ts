import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.loginService.getUser();
    this.router.navigate(['post'], { relativeTo: this.route });
  }
}
