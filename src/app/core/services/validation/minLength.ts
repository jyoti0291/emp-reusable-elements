import { ValidatorContract } from './interface';

export class MinLength implements ValidatorContract {
    init(array) {
        console.log('Minlength algorithm');
        return true;
        // implementation here
    }
}
