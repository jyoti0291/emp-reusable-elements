import { Validators } from '@angular/forms';

import { ValidatorContract } from './interface';

export class Pattern implements ValidatorContract {
    constructor(public data) {}
    init() {
        return {
            name: 'pattern',
            validator: Validators.pattern('^[a-zA-Z]+$'),
            message: 'Accept only text'
        };
    }
}
