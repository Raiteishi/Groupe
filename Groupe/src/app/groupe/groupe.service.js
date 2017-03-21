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
var groupe_1 = require('./groupe');
var GroupeService = (function () {
    function GroupeService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/groupe'; // URL to web api
        this.testUrl = 'https://gestion-groupe.firebaseio.com';
        this.groupesUrl = '/all';
        this.endUrl = '.json';
        this.groupe = new groupe_1.Groupe();
        this.check = false;
    }
    GroupeService.prototype.getGroupes = function () {
        console.log(this.baseUrl + this.groupesUrl);
        return this.http.get(this.baseUrl + this.groupesUrl)
            .map(function (res) { return res.json(); });
    };
    GroupeService.prototype.getGroupe = function (id) {
        /*let groupe$ = this.http
            .get(`${this.baseUrl}/?id=${id}`,{headers:this.getHeaders()})
            .map(mapGroupe);
        return groupe$;*/
        //console.log(this.testUrl+this.groupeUrl+"/"+id);
        return this.http.get(this.baseUrl + "?id=" + id)
            .map(function (res) { return res.json(); });
    };
    GroupeService.prototype.updateGroupe = function (groupe) {
        return this.http.put(this.baseUrl + "/update?id=" + groupe.id + "&name=" + groupe.name, JSON.stringify(groupe));
    };
    GroupeService.prototype.addGroupe = function (name) {
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        return this.http
            .put(this.baseUrl + "?name=" + name, JSON.stringify(name), headers);
    };
    GroupeService.prototype.deleteGroupe = function (groupe) {
        console.log(this.baseUrl + '?id=' + groupe.id);
        return this.http
            .delete(this.baseUrl + "?id=" + groupe.id);
    };
    GroupeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GroupeService);
    return GroupeService;
}());
exports.GroupeService = GroupeService;
//# sourceMappingURL=groupe.service.js.map