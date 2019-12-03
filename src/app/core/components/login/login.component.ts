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
  constructor(private facadeService: FacadeService, public loginService: LoginService, private router: Router) {
    this.facadeService.setTitle('login');
  }
  ngOnInit() {
    localStorage.clear();
  }
  doLogin() {
    this.loginService.doLogin(this.userId).subscribe((res: HttpResponse<any>) => {
      localStorage.setItem('CSRF-TOKEN', res.headers.get('CSRF-TOKEN'));
      localStorage.setItem('userData', JSON.stringify(res.body.responseObject));
      this.router.navigate(['/event']);
    });
  }

}
