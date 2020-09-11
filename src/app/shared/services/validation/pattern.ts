import { Validators } from '@angular/forms';

import { ValidatorContract } from './interface';
import { patterMapper } from './patternMapper';
export class Pattern implements ValidatorContract {
    constructor(public data) {}
    init() {
        if (this.data && this.data.pattern) {
            return {
                name: 'pattern',
                validator: Validators.pattern(patterMapper[this.data.pattern]),
                message: 'Accept only text'
            };
        }
    }
}
