import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  showCompleted: boolean;
  todos: [];
  user: any;

  constructor(private apiService: ApiService, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.apiService.getToDoByUserId(this.user.id).subscribe(todos => {
      this.todos = todos;
    });
  }
}
