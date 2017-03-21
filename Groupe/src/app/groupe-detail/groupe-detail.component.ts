import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }                   from '@angular/router';
import { Groupe }                   from '../groupe/groupe';
import { GroupeService }            from '../groupe/groupe.service';
import { IndividuService }          from '../individu/individu.service';
import { Individu }                 from '../individu/individu';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId:module.id,
   selector: 'groupe-detail',
   templateUrl: './groupe-detail.component.html',
   styleUrls: ['./groupe-detail.component.css'],
   providers: [IndividuService]
   
})

export class GroupeDetailComponent {
    @Input()
    groupe: Groupe;
    individus : Individu[];
    selectedIndividu:Individu;
    response: any;
    errorMessage: String = '';

    constructor(
      private groupeService: GroupeService,
      private individuService : IndividuService,
      private route: ActivatedRoute,
      private location: Location,
      private router: Router
    ) { }


    getIndividus(): void {
        this.individuService.getIndividus()
          .subscribe(individus => this.individus = individus);
    }

    ngOnInit(): void {
      this.getIndividus();
      this.route.params
        .switchMap((params: Params) => this.groupeService.getGroupe(+params['id']))
        .subscribe(groupe => this.groupe = groupe);
    }
    
    onSelect(i: Individu): void {
      this.selectedIndividu = i;
    }

    gotoDetail():void {
    this.router.navigate(['/detailIndividu', this.selectedIndividu.id]);
  }

  onEnter(value: string,id:number): void{
    this.groupe.name=value;
    this.groupe.id = id;
    this.groupeService.updateGroupe(this.groupe)
    .subscribe(p=> this.response = p);
  }
    
    goBack(): void {
      this.location.back();
    }
}