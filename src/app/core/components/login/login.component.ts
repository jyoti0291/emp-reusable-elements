import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { FacadeService } from 'services';
import { LoginService } from 'services';

@Component({
  selector: 'emp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userId = '';
  private loginData;
  private userData;
  constructor(private facadeService: FacadeService, public loginService: LoginService) {
    this.facadeService.setTitle('login');
  }
  ngOnInit() {
    localStorage.clear();
  }
  doLogin() {
    this.loginService.doLogin(this.userId).subscribe(resp => {
      localStorage.setItem('CSRF-TOKEN', resp.headers.get('CSRF-TOKEN'));
      localStorage.setItem('userData', JSON.stringify(resp.body.responseObject));
      this.loginData = resp.body;
      this.getUser();
      // /*this.router.navigate(['/event']);
    });
  }

  getUser() {
    this.loginService.getUser().subscribe(resp => {
      this.userData = resp;
    });
  }

}
