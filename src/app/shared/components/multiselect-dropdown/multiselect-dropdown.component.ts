import { Component, Input, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IDropdownSettings } from "ng-multiselect-dropdown";

import { FieldConfig } from "../components.interface";
import { MinLength, Pattern, Required, ValidationService } from "services";

@Component({
    selector: "rx-multiselect-dropdown",
    templateUrl: "./multiselect-dropdown.component.html",
    styleUrls: ["./multiselect-dropdown.component.scss"]
})
export class MultiselectDropdownComponent implements OnInit {
    @Input() field: FieldConfig;
    @Input() group: FormGroup;
    @Output() changedValue = new EventEmitter<string>();
    constructor() {}

    ngOnInit() {
        const vsInstance = new ValidationService();

        const required = vsInstance.run(new Required());

        this.group.controls[this.field.name].setValidators([
            required.validator
        ]);
        this.field.validationMessages.push(required);
    }
    onItemSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
}
