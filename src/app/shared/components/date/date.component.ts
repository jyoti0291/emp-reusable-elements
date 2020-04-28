import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ValidationService, Required } from 'services';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../components.interface';
import { NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rx-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  @Input() data;
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  @Output() changedValue = new EventEmitter<string>();

  charactercountleft: number;
  public displayErrors: boolean;

  constructor(private config: NgbDatepickerConfig, private vsInstance: ValidationService) {
    const current = new Date();
    config.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
    config.outsideDays = 'hidden';
    config.displayMonths = 2;
    config.navigation = 'select';
    config.showWeekNumbers = false;
  }
  ngOnInit() {

    const required = this.vsInstance.run(new Required(this.field.validationConfig));

    const validatorResult = this.vsInstance.prepareValidators(required);
    this.group.controls[this.field.name].setValidators([...validatorResult]);
    this.field.validationMessages.push(required);
  }

  onChange() {
    this.changedValue.emit(this.group.controls[this.field.name].value);
  }
}
