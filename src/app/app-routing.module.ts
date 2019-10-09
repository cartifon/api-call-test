import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PostComponent } from './dashboard/post/post.component';
import { AlbumComponent } from './dashboard/album/album.component';
import { TodoComponent } from './dashboard/todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'post', component: PostComponent, canActivate: [AuthGuardService] },
      { path: 'album', component: AlbumComponent, canActivate: [AuthGuardService] },
      { path: 'todo', component: TodoComponent, canActivate: [AuthGuardService] }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
