import { Component } from '@angular/core';
import { GroupService } from 'src/app/Service/Group/group.service';
import { Group } from 'src/app/Service/Group/group.model';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.css']
})
export class ListGroupsComponent {
  groups: Array<Group> = new Array();
  constructor (private groupsService: GroupService){

  }
  ngOnInit(){
    this.getAllGroups();
  }
  excluirGrupo(id: number){
    this.groupsService.deleteGroup(id).subscribe(group => {
      const index = this.groups.findIndex(group => group.id === id);
      if (index !== -1) {
        this.groups.splice(index, 1);
      }
      console.log("EXCLUÌDO");
      
    }, err =>{
      console.log("deu ruim apagar", err);
    });
  }
  getAllGroups(){
    this.groupsService.getGroup().subscribe(groups => {
      console.log("Resu:", groups);
      this.groups = groups;
    }, err =>{
      console.log("deu ruim ", err);
    });
  }


}
