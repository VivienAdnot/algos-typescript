import { Promise } from "es6-promise"
import { Thenable } from "es6-promise"

export class Deferred<T> {
    public promise: Promise<T>;

    public resolve: (value?: T | Thenable<T>) => void;
    public reject: (error?: any) => void;

    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}