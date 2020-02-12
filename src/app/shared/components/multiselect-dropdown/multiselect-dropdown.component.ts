import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { MultiSelect } from "../components.interface";
import { FormGroup } from "@angular/forms";

import { MinLength, Pattern, Required, ValidationService } from 'services';

@Component({
    selector: "rx-multiselect-dropdown",
    templateUrl: "./multiselect-dropdown.component.html",
    styleUrls: ["./multiselect-dropdown.component.scss"]
})
export class MultiselectDropdownComponent implements OnInit {
    constructor() {}

    @Input() field: MultiSelect;
    @Input() group: FormGroup;
    @Output() changedValue = new EventEmitter<string>();
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    ngOnInit() {
        this.sortMultiSelectOptions();
    }

    sortMultiSelectOptions() {
        let sortedOptions = this.sortItems(this.multiFilter());
        let sortedValues = this.sortItems(this.field.value);
        let finalOptions = sortedValues.concat(sortedOptions);
        this.field.options = finalOptions;
    }

    sortItems(values) {
        return values.sort((a, b) => (a.id > b.id ? 1 : -1));
    }

    multiFilter() {
        let temp = this.field.value.map(a => a.id);
        return this.field.options.filter(a => {
            if (temp.indexOf(a.id) == -1) return a;
        });
    }

    onItemSelect(item: any) {
        this.sortMultiSelectOptions();
    }

    OnItemDeSelect(item: any) {
        this.sortMultiSelectOptions();
    }

    onSelectAll(items: any) {
        this.sortMultiSelectOptions();
    }

    onDeSelectAll(items: any) {
        this.sortMultiSelectOptions();
    }
}
