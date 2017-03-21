import { Component,OnInit }     from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Groupe }        from './groupe';
import { GroupeService } from './groupe.service';

@Component({
  moduleId: module.id,
  selector: 'groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})

export class GroupeComponent implements OnInit {
  groupes : Groupe[];
  groupe= new Groupe();
  response: any;

  constructor(
    private groupeService: GroupeService,
    private router: Router) { }

  ngOnInit(): void {
    this.groupeService
      .getGroupes()
      .subscribe(
        groupes => this.groupes = groupes
      );
  }

  addNewGroupe(name: string): void {
    this.groupeService.addGroupe(name)
      .subscribe(
        () => this.ngOnInit()
      );
  }
  
  deleteGroupe(groupe: Groupe): void {
    this.groupeService.deleteGroupe(groupe)
        .subscribe(
          () => this.ngOnInit()
        );
  }

    
}