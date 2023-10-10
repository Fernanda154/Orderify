import { Component } from '@angular/core';
import { UserService } from '../../Service/User/user.service';
import { User } from '../../Service/User/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent {
  users: Array<User> = new Array();
  constructor (private usersService: UserService){

  }
  ngOnInit(){
    this.getAlUsers();
  }
  excluirUsuario(id: number){
    this.usersService.deleteUser(id).subscribe(users => {
      const index = this.users.findIndex(user => user.id === id);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
      console.log("EXCLUÌDO");
      
    }, err =>{
      console.log("deu ruim apagar", err);
    });
  }
  getAlUsers(){
    this.usersService.getUsers().subscribe(users => {
      console.log("Resu:", users);
      this.users = users;
    }, err =>{
      console.log("deu ruim ", err);
    });
  }

}
