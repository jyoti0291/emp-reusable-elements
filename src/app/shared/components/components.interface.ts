export interface CustomCssClass {
    container: string;
    label: string;
}


export interface ValidationConfig {
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    required?: boolean;
}

export interface ValidationMessage {
    message: string;
    name: string;
    validator?: any;
}


export interface FieldConfig {
    customCssClass?: CustomCssClass;
    infoTooltip?: InfoTooltip;
    inputType?: string;
    label: string;
    name: string;
    placeholder?: string;
    validationConfig?: ValidationConfig;
    validationMessages?: ValidationMessage[];
}
export interface InfoTooltip {
    placement: string;
    title: string;
}
export interface RxJSON {
    key: number;
    value: string;
}
export interface Text extends FieldConfig {
    value?: string;
}
export interface Email extends FieldConfig {
    value: string;
}
export interface Radio extends FieldConfig {
    options: Array<string>;
    value?: string;
}
export interface CheckBox extends FieldConfig {
    mincheck: number;
    options: RxJSON[];
}
export interface TextArea extends FieldConfig {
    value?: string;
}
export interface Select extends FieldConfig {
    options: RxJSON[];
    value: string;
}
export interface DateType {
    baseConfig: FieldConfig;
    datePickerSettings: {
        displayMonths: number;
        outsideDays: string;
        navigation: string;
        showWeekNumbers: false;
    };
    value?: string;
}
export interface MultiSelect extends FieldConfig {
    options: any;
    settings: {
        singleSelection: false;
        text: 'Select Countries';
        selectAllText: 'Select All';
        unSelectAllText: 'UnSelect All';
        enableSearchFilter: true;
        classes: 'myclass custom-class';
        enableFilterSelectAll: true;
        showCheckbox: true;
    };
    value: any;
}
export interface Button {
    label: string;
    inputType: string;
}
export interface CheckBoxGroup {
    id: string;
    text: string;
    checkbox: boolean;
}
