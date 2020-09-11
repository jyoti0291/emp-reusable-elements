import { Validators } from '@angular/forms';

import { ValidatorContract } from './interface';

export class Required implements ValidatorContract {
    constructor(public data) {}
    init() {
        if (this.data && this.data.pattern) {
            return {
                name: 'required',
                validator: Validators.required,
                message: 'Required!'
            };
        }
    }
}
