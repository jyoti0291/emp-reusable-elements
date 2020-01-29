import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FacadeService } from 'services';
import { LoginService } from 'services';

@Component({
  selector: 'rx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userId = '';
  private loginData;
  constructor(private facadeService: FacadeService, public loginService: LoginService, private router: Router) {
    this.facadeService.setTitle('login');
  }
  ngOnInit() {
    localStorage.clear();
  }
  doLogin() {
    this.loginService.doLogin(this.userId).subscribe(resp => {
      localStorage.setItem('CSRF-TOKEN', resp.headers.get('CSRF-TOKEN'));
      this.loginData = resp.body.responseObject;
      const id = this.loginData.id;
      const roles = this.loginData.roles;
      delete this.loginData.id;
      delete this.loginData.roles;
      this.loginData.userId = id;
      this.loginData.userRole = roles;
      localStorage.setItem('userData', JSON.stringify(this.loginData));
      this.router.navigate(['/landingpage']);
      localStorage.setItem('userData', JSON.stringify(resp.body.responseObject));
      this.loginData = resp.body;
      //this.getUser();
      //this.router.navigate(['/event']);
    });
  }
}
