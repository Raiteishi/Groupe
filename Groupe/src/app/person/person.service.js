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
require('rxjs/add/operator/map');
var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/SWBackend/jaxrs';
    }
    PersonService.prototype.get = function (id) {
        var person$ = this.http
            .get(this.baseUrl + "/Person/" + id, { headers: this.getHeaders() })
            .map(mapPerson);
        return person$;
    };
    PersonService.prototype.getAll = function () {
        var person$ = this.http
            .get(this.baseUrl + "/Person", { headers: this.getHeaders() })
            .map(mapPersons);
        return person$;
    };
    PersonService.prototype.save = function (person) {
        console.log('Saving person ' + JSON.stringify(person));
        return this.http.put(this.baseUrl + "/Person", JSON.stringify(person), { headers: this.getHeaders() });
    };
    PersonService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    PersonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
function mapPersons(response) {
    return response.json().map(toPerson);
}
function mapPerson(response) {
    return toPerson(response.json());
}
function toPerson(r) {
    return r;
}
//# sourceMappingURL=person.service.js.map