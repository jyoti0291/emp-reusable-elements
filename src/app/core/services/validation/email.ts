import { Validators } from '@angular/forms';

import { ValidatorContract } from './interface';

export class EmailService implements ValidatorContract {
    constructor() {}
    init() {
        return {
            name: 'email',
            validator: Validators.email,
            message: 'invalid Email'
        };
    }
}
