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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var individu_1 = require('./individu');
var IndividuService = (function () {
    function IndividuService(http) {
        this.http = http;
        this.testUrl = 'https://gestion-groupe.firebaseio.com';
        this.baseUrl = 'http://localhost:8080/individu'; // URL to web api
        this.individu = new individu_1.Individu();
    }
    IndividuService.prototype.getIndividus = function () {
        return this.http.get(this.baseUrl)
            .map(function (res) { return res.json(); });
    };
    IndividuService.prototype.getIndividu = function (id) {
        return this.http.get(this.baseUrl + "/?id=" + id)
            .map(function (res) { return res.json(); });
    };
    IndividuService.prototype.updateIndividu = function (i) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + "/update", JSON.stringify(i), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    IndividuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], IndividuService);
    return IndividuService;
}());
exports.IndividuService = IndividuService;
//# sourceMappingURL=individu.service.js.map