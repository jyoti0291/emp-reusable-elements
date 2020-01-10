import { SortingStrategy } from './interface';

// linear search sorting algorithm implementing the `SortingStrategy` interface, it implements its algorithm in the `init` method
export class MinLength implements SortingStrategy {
    init(array) {
        console.log('Minlength algorithm');
        return true;
        // implementation here
    }
}
