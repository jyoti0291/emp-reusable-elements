import { Validators } from '@angular/forms';

import { ValidatorContract } from './interface';

export class Required implements ValidatorContract {
    init() {
        return {
            name: 'required',
            validator: Validators.required,
            message: 'Required!'
        };
    }
}
