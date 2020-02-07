export interface ValidationMessage {
    name: string;
    validator?: any;
    message: string;
}
export interface ValidationConfig {
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    required?: boolean;
}
export interface FieldConfig {
    label?: string;
    name: string;
    inputType?: string;
    options?: any[];
    value?: any;
    settings?: any[];
    validationConfig?: ValidationConfig;
    validationMessages?: ValidationMessage[];
}
export interface CheckBoxGroup {
    id: string;
    text: string;
    checkbox: boolean;
}
