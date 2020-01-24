import {
    Component,
    OnInit,
    Input,
    SimpleChanges,
    EventEmitter,
    Output,
    OnChanges
} from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";

import { FieldConfig } from "../components.interface";
import { ValidationService, Required } from "services";

@Component({
    selector: "emp-select",
    templateUrl: "./select.component.html",
    styleUrls: ["./select.component.scss"]
})
export class SelectComponent implements OnInit {
    @Input() data;
    @Input() field: FieldConfig;
    @Input() group: FormGroup;
    @Output() changedValue = new EventEmitter<string>();

    charactercountleft: number;
    public displayErrors: boolean;

    constructor() {}
    ngOnInit() {
        const vsInstance = new ValidationService();

        const required = vsInstance.run(new Required());

        this.group.controls[this.field.name].setValidators([
            required.validator
        ]);
        this.field.validationMessages.push(required);
    }

    onChange() {
        this.changedValue.emit(this.group.controls[this.field.name].value);
    }
}
