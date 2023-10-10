import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupForm } from 'src/app/Service/Group/group.model';
import { GroupService } from 'src/app/Service/Group/group.service';

@Component({
  selector: 'app-form-groups',
  templateUrl: './form-groups.component.html',
  styleUrls: ['./form-groups.component.css']
})
export class FormGroupsComponent {
  group: any = {};
  constructor(private groupsService: GroupService, private route: ActivatedRoute) { };
  ngOnInit() {
    const groupId = this.route.snapshot.params['id'];
    if (groupId) {      
      this.groupsService.getGroupById(groupId).subscribe(group => {
        console.log('grupo', group);
        this.group = group;
      });
    }
  }
  onSubmit(formData: GroupForm) {
    console.log("FORM AQUI", formData);
    if(formData.id != undefined){
      this.groupsService.updateGroup(formData.id, formData).subscribe(
        (response) => {
          console.log('Grupo atualizado com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao criar grupo:', error);
        }
      );
    }else{
      this.groupsService.createGroup(formData).subscribe(
        (response) => {
          console.log('Grupo criado com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao criar grupo:', error);
        }
      );
    }
    
  }
}
