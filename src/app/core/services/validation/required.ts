import { ValidatorContract } from './interface';
import { Validators } from '@angular/forms';

export class Required implements ValidatorContract {
    init() {
        return {
            name: 'required',
            validator: Validators.required,
            message: 'Required!'
        };
        // implementation here
    }
}
