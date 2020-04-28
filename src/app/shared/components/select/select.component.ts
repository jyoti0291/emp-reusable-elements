import {
    Component,
    OnInit,
    Input,
    SimpleChanges,
    EventEmitter,
    Output,
    OnChanges
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { Select } from '../components.interface';
import { ValidationService, Required } from 'services';

@Component({
    selector: 'rx-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
    @Input() data;
    @Input() field: Select;
    @Input() group: FormGroup;
    @Output() changedValue = new EventEmitter<string>();

    constructor(private vsInstance: ValidationService) {}
    ngOnInit() {

        const required = this.vsInstance.run(new Required(this.field.validationConfig));

        const validatorResult = this.vsInstance.prepareValidators(required );
        this.group.controls[this.field.name].setValidators([...validatorResult]);
        this.field.validationMessages.push(required);
    }

    onChange() {
        this.changedValue.emit(this.group.controls[this.field.name].value);
    }
}
