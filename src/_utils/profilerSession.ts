import { Profiler } from "./profiler";

export function startProfilerSyncSession(fn: () => any, funcName?: string): void {
    let instance = new Profiler();
    console.log("start session: " + funcName);
    let elapsed = instance.measureSync(fn);
    console.log(`end sync session: ${elapsed} milliseconds`);
}

export function startProfilerPromiseSession(fn: () => any, funcName?: string): void {
    let instance = new Profiler();
    console.log("start session: " + funcName);
    instance.measurePromise(fn)
        .then((elapsed: number) => { console.log(`end async session: ${elapsed} milliseconds`) });
}

/* use in main.ts

import { startProfilerPromiseSession } from "./_utils/profilerSession";
import { Promise } from "es6-promise"


let asyncFn = function(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        window.setTimeout(() => {
            resolve(100);
        }, 500);
    });
}

startProfilerPromiseSession(asyncFn, "measure promise");

*/