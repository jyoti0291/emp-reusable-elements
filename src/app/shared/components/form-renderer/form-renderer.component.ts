import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rx-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss']
})
export class FormRendererComponent implements OnInit {
  public formSrc = {
    components: []
  };
  constructor() { }

  ngOnInit() {
    const formComp = localStorage.getItem('formComponents');
    this.formSrc.components = JSON.parse(formComp);
    console.log(this.formSrc);
  }

  onSubmit(event) {
    console.log(event.data);
  }

}
