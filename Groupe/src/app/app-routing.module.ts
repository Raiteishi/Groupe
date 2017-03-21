import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupeComponent }         from './groupe/groupe.component';
import { GroupeDetailComponent }   from './groupe-detail/groupe-detail.component';
import { IndividuDetailComponent } from './individu-detail/individu-detail.component';
import { LoginComponent }          from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'groupe',  component: GroupeComponent },
  { path: 'detail/:id', component: GroupeDetailComponent },
  { path: 'detailIndividu/:id',  component: IndividuDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}