import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  searchPost: string;
  posts = [];
  filteredPosts = [];
  user: any;

  constructor(private apiService: ApiService, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.apiService.getPostsByUserId(this.user.id).subscribe(posts => {
      posts.forEach(post => {
        this.apiService.getCommentsByPostId(post.id).subscribe(comments => {
          post.comments = comments;
          this.posts.push(post);
          console.log(this.posts);
        });
      });
    });
  }

  filter() {
    const regex = new RegExp('\\b(' + this.searchPost + ')\\b');
    this.filteredPosts = this.posts.filter(post => {
      return regex.test(post.title) || regex.test(post.body);
    });
  }
}
