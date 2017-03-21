import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './person';

@Component({
    moduleId:module.id,
    selector:"personedit",
    template:`
    <p>{{person?.id}}</p>`
})
export class PersonEditComponent implements OnInit{
    @Input()
    id: number;
    person: Person;

    constructor(private personService: PersonService){ }

    ngOnInit(){
        console.log(this.id);
        this.personService
        .get(this.id)
        .subscribe(p => this.person = p);
    }

}