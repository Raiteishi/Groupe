import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy }    from '@angular/http';


import { AppRoutingModule } from './app-routing.module';

import { GroupeDetailComponent }   from './groupe-detail/groupe-detail.component';
import { GroupeComponent }         from './groupe/groupe.component';
import { GroupeService }           from './groupe/groupe.service';
import { IndividuService }         from './individu/individu.service';
import { FilterGroupePipe }        from './filter-groupe.pipe';
import { IndividuDetailComponent } from './individu-detail/individu-detail.component';
import { LoginComponent }          from './login/login.component';
import { AccueilComponent }        from './accueil/accueil.component';
import { PersonComponent }         from './person/person.component';
import { PersonService }           from './person/person.service';
import { PersonEditComponent }     from './person/person-edit.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ 
    GroupeComponent,
    GroupeDetailComponent,
    FilterGroupePipe,
    IndividuDetailComponent,
    LoginComponent,
    AccueilComponent,
    PersonComponent,
    PersonEditComponent
  ],
  providers: [ 
    GroupeService, 
    IndividuService, 
    PersonService, 
        { provide: XSRFStrategy, 
          useValue: new CookieXSRFStrategy('myCookieName', 'My-Header-Name')} ],
  bootstrap:    [ AccueilComponent ]
})

export class AppModule { }
