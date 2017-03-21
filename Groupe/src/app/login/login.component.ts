import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { LoginService } from './login.service';

@Component({
  moduleId:module.id,
  selector: 'login',
  templateUrl: './login.component.html',
  providers:[ LoginService ]
})
export class LoginComponent implements OnInit {
  
  login:string;
  password:string;
  check : boolean;

  constructor(private loginService: LoginService,
  private router: Router) { }
  
  ngOnInit() {  }


  onPress(login:string,password:string):void{
    this.loginService.check(login,password);
  }
}
