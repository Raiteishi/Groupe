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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
var groupe_detail_component_1 = require('./groupe-detail/groupe-detail.component');
var groupe_component_1 = require('./groupe/groupe.component');
var groupe_service_1 = require('./groupe/groupe.service');
var individu_service_1 = require('./individu/individu.service');
var filter_groupe_pipe_1 = require('./filter-groupe.pipe');
var individu_detail_component_1 = require('./individu-detail/individu-detail.component');
var login_component_1 = require('./login/login.component');
var accueil_component_1 = require('./accueil/accueil.component');
var person_component_1 = require('./person/person.component');
var person_service_1 = require('./person/person.service');
var person_edit_component_1 = require('./person/person-edit.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                groupe_component_1.GroupeComponent,
                groupe_detail_component_1.GroupeDetailComponent,
                filter_groupe_pipe_1.FilterGroupePipe,
                individu_detail_component_1.IndividuDetailComponent,
                login_component_1.LoginComponent,
                accueil_component_1.AccueilComponent,
                person_component_1.PersonComponent,
                person_edit_component_1.PersonEditComponent
            ],
            providers: [
                groupe_service_1.GroupeService,
                individu_service_1.IndividuService,
                person_service_1.PersonService,
                { provide: http_1.XSRFStrategy,
                    useValue: new http_1.CookieXSRFStrategy('myCookieName', 'My-Header-Name') }],
            bootstrap: [accueil_component_1.AccueilComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map