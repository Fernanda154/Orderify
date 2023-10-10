import { Component } from '@angular/core';
import { UserForm } from 'src/app/Service/User/user.model';
import { UserService } from 'src/app/Service/User/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent {
  user: any = {};
  constructor(private userService: UserService, private route: ActivatedRoute) { };
  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    if (userId) {
      
      this.userService.getUserById(userId).subscribe(user => {
        console.log('user', user);
        this.user = user;
      });
    }
  }
  onSubmit(formData: UserForm) {
    console.log("FORM AQUI", formData);
    if(formData.id != undefined){
      this.userService.updateUser(formData.id, formData).subscribe(
        (response) => {
          console.log('Usuário atualizado com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao criar usuário:', error);
        }
      );
    }else{
      this.userService.createUser(formData).subscribe(
        (response) => {
          console.log('Usuário criado com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao criar usuário:', error);
        }
      );
    }
    
  }
  
}
