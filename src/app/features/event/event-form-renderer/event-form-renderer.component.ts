import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rx-event-form-renderer',
  templateUrl: './event-form-renderer.component.html',
  styleUrls: ['./event-form-renderer.component.scss']
})
export class EventFormRendererComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  editForm() {
    this.router.navigate(['../create'], { relativeTo: this.activatedRoute });
  }

}
