import { Validators } from '@angular/forms';

import { ValidatorContract } from './interface';

export class Email implements ValidatorContract {
    constructor(public data) {}
    init() {
        return {
            name: 'email',
            validator: Validators.email,
            message: this.data + ' invalid Email'
        };
    }
}
