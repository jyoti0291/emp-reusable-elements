import { Validators } from '@angular/forms';

import { ValidatorContract } from './interface';

export class MinLength implements ValidatorContract {
    constructor(public data) {}
    init() {
        return {
            name: 'minlength',
            validator: Validators.minLength(this.data),
            message: this.data + ' Required'
        };
    }
}
