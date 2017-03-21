// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Individu }                 from '../individu/individu';
import { IndividuService }          from '../individu/individu.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId:module.id,
  selector: 'individu-detail',
  templateUrl: './individu-detail.component.html',
  styleUrls: ['./individu-detail.component.css']
})

export class IndividuDetailComponent implements OnInit {
   @Input() 
   individu:Individu;
   response: any;

   constructor(
      private individuService: IndividuService,
      private route: ActivatedRoute,
      private location: Location
    ) { }

    ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.individuService.getIndividu(+params['id']))
        .subscribe(individu => this.individu = individu);
    }
    
    updateIndividu(i: Individu): void{
      this.individuService.updateIndividu(i)
          .subscribe(p=> this.response = p);
    }


    goBack(): void {
      this.location.back();
    }
}