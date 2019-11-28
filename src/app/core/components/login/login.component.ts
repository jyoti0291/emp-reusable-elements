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
  constructor(private facadeService: FacadeService, public loginService: LoginService, private router: Router) {
    this.facadeService.setTitle('login');
  }

  doLogin() {
    this.loginService.doLogin(this.userId).subscribe((res: HttpResponse<any>) => {
      localStorage.setItem('CSRF-TOKEN', res.headers.get('CSRF-TOKEN'));
      this.router.navigate(['/event']);
    });
  }

}
