import { Component, OnInit }  from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './person';

@Component({
    moduleId: module.id,
    selector: 'person',
    template: `
    <p>{{pre?.id}}</p>
        <section *ngIf="people" class = "panel-body">
	<table class = "table-striped table-bordered table-hover table-condensed">
		<tr *ngFor="let person of people">
			<td>{{person.id}}&nbsp;</td>
            <td>{{person.name}} &nbsp;&nbsp;</td>
			<td>Edit</td>

	</table>
</section>
    `
})

export class PersonComponent implements OnInit{
    people: Person[] = [] ;
    pre: Person;

    constructor(private personService: PersonService){}

    ngOnInit(){
        this.personService
        .get(5)
        .subscribe(p => this.pre = p);
       this.personService.getAll().subscribe(p => this.people = p);
    }
}