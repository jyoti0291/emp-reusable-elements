import { Validators } from '@angular/forms';

import { ValidatorContract } from './interface';

export class MinLength implements ValidatorContract {
    constructor(public data) {}
    init() {
        if (this.data && this.data.minlength) {
            return {
                name: 'minlength',
                validator: Validators.minLength(this.data.minlength),
                message: this.data.minlength + ' Required'
            };
        }
    }
}
