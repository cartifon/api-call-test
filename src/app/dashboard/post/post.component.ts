import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: any;
  user: any;

  constructor(private apiService: ApiService, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.apiService.getPostsByUserId(this.user.id).subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
}
