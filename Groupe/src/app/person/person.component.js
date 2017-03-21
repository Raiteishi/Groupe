"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var person_service_1 = require('./person.service');
var PersonComponent = (function () {
    function PersonComponent(personService) {
        this.personService = personService;
        this.people = [];
    }
    PersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personService
            .get(5)
            .subscribe(function (p) { return _this.pre = p; });
        this.personService.getAll().subscribe(function (p) { return _this.people = p; });
    };
    PersonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person',
            template: "\n    <p>{{pre?.id}}</p>\n        <section *ngIf=\"people\" class = \"panel-body\">\n\t<table class = \"table-striped table-bordered table-hover table-condensed\">\n\t\t<tr *ngFor=\"let person of people\">\n\t\t\t<td>{{person.id}}&nbsp;</td>\n            <td>{{person.name}} &nbsp;&nbsp;</td>\n\t\t\t<td>Edit</td>\n\n\t</table>\n</section>\n    "
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map