import { Validators } from '@angular/forms';

import { ValidatorContract } from './interface';

export class Required implements ValidatorContract {
    init(data) {
        return {
            name: 'required',
            validator: Validators.required,
            message: 'Required!'
        };
    }
}
