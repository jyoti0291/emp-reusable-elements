import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FacadeService } from 'services';


@Component({
  selector: 'emp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( private facadeService: FacadeService) {
    this.facadeService.setTitle('login');
  }

}
