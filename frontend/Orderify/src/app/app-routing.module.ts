import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './pages/Users/list-users/list-users.component';
import { RegisterUsersComponent } from './pages/Users/form-users/register-users.component';
import { ListGroupsComponent } from './pages/Groups/list-groups/list-groups.component';
import { FormGroupsComponent } from './pages/Groups/form-groups/form-groups.component';
import { ListOrderComponent } from './pages/ServicesOrder/list-order/list-order.component';
import { FormOrderComponent } from './pages/ServicesOrder/form-order/form-order.component';


const routes: Routes = [
  
  {path: 'users', component: ListUsersComponent},
  {path: 'form-user', component: RegisterUsersComponent},
  {path: 'form-user/:id', component: RegisterUsersComponent }, 
  {path: 'groups', component: ListGroupsComponent }, 
  {path: 'form-group', component: FormGroupsComponent }, 
  {path: 'form-group/:id', component: FormGroupsComponent },
  {path: 'orders', component: ListOrderComponent },  
  {path: 'form-order', component: FormOrderComponent },
  {path: 'form-order/:id', component: FormOrderComponent },
  {path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
