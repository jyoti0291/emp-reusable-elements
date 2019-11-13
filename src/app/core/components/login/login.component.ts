import { Component } from '@angular/core';
import { FacadeService } from 'services';
import { LoginService } from 'services';

@Component({
  selector: 'emp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userId = '';
  private loginData;
  constructor(private facadeService: FacadeService, public loginService: LoginService) {
    this.facadeService.setTitle('login');
  }

  doLogin() {
    this.loginService.doLogin(this.userId).subscribe(data => this.loginData = data);
  }

}
