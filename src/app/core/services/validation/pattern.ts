import { Validators } from '@angular/forms';

import { ValidatorContract } from './interface';
import { patterMapper } from './patternMapper';
export class Pattern implements ValidatorContract {
    constructor(public data) {}
    init() {
        return {
            name: 'pattern',
            validator: Validators.pattern(patterMapper[this.data]),
            message: 'Accept only text'
        };
    }
}
