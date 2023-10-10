import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './Users/list-users/list-users.component';
import { RegisterUsersComponent } from './Users/register-users/register-users.component';

const routes: Routes = [
  
  {path: 'users', component: ListUsersComponent},
  {path: 'register-user', component: RegisterUsersComponent},
  { path: 'register-user/:id', component: RegisterUsersComponent }, 
  //{path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
