// recode async.map
// Apply the same async function to every item in an array of values
// return an array of results
// http://promise-nuggets.github.io/articles/14-map-in-parallel.html

export const async = {
    map: (arr: any[],
        iterator: (el: any, cb: (err: string, result: any) => void) => void,
        finalCb: (err: string, results: any[]) => void) => {

        let results: any[] = [];
        let itCounter = 0;

        for(let it = 0; it < arr.length; it++) {
            iterator(arr[it], (err, result) => {
                results[it] = result;
                itCounter++;

                if (itCounter === arr.length) {
                    finalCb("", results);
                }
            });
        }
    }
}