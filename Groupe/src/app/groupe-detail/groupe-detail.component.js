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
var common_1 = require('@angular/common');
var router_2 = require('@angular/router');
var groupe_1 = require('../groupe/groupe');
var groupe_service_1 = require('../groupe/groupe.service');
var individu_service_1 = require('../individu/individu.service');
require('rxjs/add/operator/switchMap');
var GroupeDetailComponent = (function () {
    function GroupeDetailComponent(groupeService, individuService, route, location, router) {
        this.groupeService = groupeService;
        this.individuService = individuService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.errorMessage = '';
    }
    GroupeDetailComponent.prototype.getIndividus = function () {
        var _this = this;
        this.individuService.getIndividus()
            .subscribe(function (individus) { return _this.individus = individus; });
    };
    GroupeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getIndividus();
        this.route.params
            .switchMap(function (params) { return _this.groupeService.getGroupe(+params['id']); })
            .subscribe(function (groupe) { return _this.groupe = groupe; });
    };
    GroupeDetailComponent.prototype.onSelect = function (i) {
        this.selectedIndividu = i;
    };
    GroupeDetailComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detailIndividu', this.selectedIndividu.id]);
    };
    GroupeDetailComponent.prototype.onEnter = function (value, id) {
        var _this = this;
        this.groupe.name = value;
        this.groupe.id = id;
        this.groupeService.updateGroupe(this.groupe)
            .subscribe(function (p) { return _this.response = p; });
    };
    GroupeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', groupe_1.Groupe)
    ], GroupeDetailComponent.prototype, "groupe", void 0);
    GroupeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'groupe-detail',
            templateUrl: './groupe-detail.component.html',
            styleUrls: ['./groupe-detail.component.css'],
            providers: [individu_service_1.IndividuService]
        }), 
        __metadata('design:paramtypes', [groupe_service_1.GroupeService, individu_service_1.IndividuService, router_1.ActivatedRoute, common_1.Location, router_2.Router])
    ], GroupeDetailComponent);
    return GroupeDetailComponent;
}());
exports.GroupeDetailComponent = GroupeDetailComponent;
//# sourceMappingURL=groupe-detail.component.js.map