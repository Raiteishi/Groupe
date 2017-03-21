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
var router_1 = require('@angular/router');
var groupe_1 = require('./groupe');
var groupe_service_1 = require('./groupe.service');
var GroupeComponent = (function () {
    function GroupeComponent(groupeService, router) {
        this.groupeService = groupeService;
        this.router = router;
        this.groupe = new groupe_1.Groupe();
    }
    GroupeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupeService
            .getGroupes()
            .subscribe(function (groupes) { return _this.groupes = groupes; });
    };
    GroupeComponent.prototype.addNewGroupe = function (name) {
        var _this = this;
        this.groupeService.addGroupe(name)
            .subscribe(function () { return _this.ngOnInit(); });
    };
    GroupeComponent.prototype.deleteGroupe = function (groupe) {
        var _this = this;
        this.groupeService.deleteGroupe(groupe)
            .subscribe(function () { return _this.ngOnInit(); });
    };
    GroupeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'groupe',
            templateUrl: './groupe.component.html',
            styleUrls: ['./groupe.component.css']
        }), 
        __metadata('design:paramtypes', [groupe_service_1.GroupeService, router_1.Router])
    ], GroupeComponent);
    return GroupeComponent;
}());
exports.GroupeComponent = GroupeComponent;
//# sourceMappingURL=groupe.component.js.map