import { Promise } from "es6-promise";

export class Profiler {
    public measureSync(fn: () => any): number {
        let start = new Date().getTime();

        fn();

        let end = new Date().getTime();
        return end - start;
    }

    public measurePromise(fn: () => Promise<any>): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            let start = new Date().getTime();

            fn().then(() => {
                let end = new Date().getTime();
                resolve(end - start);                
            });
        });
    }
}