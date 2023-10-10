import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './pages/Users/list-users/list-users.component';
import { UserService } from './Service/User/user.service';
import { HeaderComponent } from './Components/header/header.component';
import { RegisterUsersComponent } from './pages/Users/form-users/register-users.component';
import { ListGroupsComponent } from './pages/Groups/list-groups/list-groups.component';
import { FormGroupsComponent } from './pages/Groups/form-groups/form-groups.component';
import { FormOrderComponent } from './pages/ServicesOrder/form-order/form-order.component';
import { ListOrderComponent } from './pages/ServicesOrder/list-order/list-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListUsersComponent,
    HeaderComponent,
    RegisterUsersComponent,
    ListGroupsComponent,
    FormGroupsComponent,
    FormOrderComponent,
    ListOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
