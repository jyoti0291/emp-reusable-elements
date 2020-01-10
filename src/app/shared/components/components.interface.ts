export interface Validator {
    name: string;
    validator: any;
    message: string;
}
export interface ValidatorDeclaration {
    key: string;
    value: any;
}
export interface FieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    options?: any[];
    collections?: any;
    type?: string;
    value?: any;
    //validations?: Validator[];
    validations?: Array<object>;
}
export interface CheckBoxGroup {
    id: string;
    text: string;
    checkbox: boolean;
}
