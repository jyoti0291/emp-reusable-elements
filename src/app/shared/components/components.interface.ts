export interface ValidationMessage {
    name: string;
    validator?: any;
    message: string;
}
export interface ValidationConfig {
    maxlength?: number;
    minlength?: number;
    pattern?: boolean;
    required?: boolean;
}
export interface FieldConfig {
    label?: string;
    name: string;
    inputType?: string;
    options?: any[];
    value?: any;
    validationConfig?: ValidationConfig;
    validationMessages?: ValidationMessage[];
}
export interface CheckBoxGroup {
    id: string;
    text: string;
    checkbox: boolean;
}
