import { async } from "./asyncmap";

const arr = [3, 2, 1];
const iterator = (el: any, cb: (err: string, result: any) => void) => {
    setTimeout(() => {
        cb("", el * 2)
    }, el * 1000)
}
async.map(arr, iterator, (error, results) => {
    console.log(error, results)
});