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
// Keep the Input import for now, we'll remove it later:
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var individu_1 = require('../individu/individu');
var individu_service_1 = require('../individu/individu.service');
require('rxjs/add/operator/switchMap');
var IndividuDetailComponent = (function () {
    function IndividuDetailComponent(individuService, route, location) {
        this.individuService = individuService;
        this.route = route;
        this.location = location;
    }
    IndividuDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.individuService.getIndividu(+params['id']); })
            .subscribe(function (individu) { return _this.individu = individu; });
    };
    IndividuDetailComponent.prototype.updateIndividu = function (i) {
        var _this = this;
        this.individuService.updateIndividu(i)
            .subscribe(function (p) { return _this.response = p; });
    };
    IndividuDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', individu_1.Individu)
    ], IndividuDetailComponent.prototype, "individu", void 0);
    IndividuDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'individu-detail',
            templateUrl: './individu-detail.component.html',
            styleUrls: ['./individu-detail.component.css']
        }), 
        __metadata('design:paramtypes', [individu_service_1.IndividuService, router_1.ActivatedRoute, common_1.Location])
    ], IndividuDetailComponent);
    return IndividuDetailComponent;
}());
exports.IndividuDetailComponent = IndividuDetailComponent;
//# sourceMappingURL=individu-detail.component.js.map