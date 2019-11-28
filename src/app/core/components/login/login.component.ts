import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FacadeService } from 'services';
import { LoginService } from 'services';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'emp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userId = '';
  private loginData;
  private userData;
  constructor(private facadeService: FacadeService, public loginService: LoginService) {
    this.facadeService.setTitle('login');
  }

  doLogin() {
    this.loginService.doLogin(this.userId).subscribe(resp => {
      localStorage.setItem('CSRF-TOKEN', resp.headers.get('CSRF-TOKEN'));
      this.loginData = resp.body;
      this.getUser();
    });
  }

  getUser() {
    this.loginService.getUser().subscribe(resp => {
      this.userData = resp;
    });
  }

}
