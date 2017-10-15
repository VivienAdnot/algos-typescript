import { generateRandomNumber } from "../_utils/random"

export class Fibonacci {
    private iterations: number;
    private container: HTMLElement;

    private result: number[];

    constructor(iterations: number, container: HTMLElement) {
        this.iterations = iterations;
        this.container = container;
    }

    public start() {
        this.compute();
        this.render();
    }

    /* computing */

    private compute(): void {
        this.result = this.initArray();

        for(let index = 0; index < this.iterations; index++) {
            this.result = this.computeCore(this.result);
        }
    }

    private computeCore(numbers: number[]): number[] {
        let last = numbers[numbers.length - 1];
        let beforeLast = numbers[numbers.length - 2];

        numbers.push(last + beforeLast);

        return numbers;
    }

    private initArray(): number[] {
        let initialyser = [];
        initialyser.push(0);
        initialyser.push(1);

        return initialyser;
    }

    /* computing */

    private render(): void {
        this.container.style.position = "relative";

        for(let index = 0; index < this.result.length; index++) {
            let column = this.createColumnElement(this.result[index], index);
            this.container.appendChild(column);            
        }
    }

    private createColumnElement(columnHeight: number, index: number): HTMLDivElement {
        let settings = {
            columnWidth: 50,
            margin: 50
        };

        let column = document.createElement("div");
        column.className = "column";

        column.style.position = "absolute";
        column.style.top = "0";
        column.style.left = ((settings.columnWidth + settings.margin) * index) + "px";

        column.style.width = settings.columnWidth + "px";
        column.style.height = columnHeight + "px";
        
        column.style.display = "inline";
        column.style.backgroundColor = this.getRandomColor();
        //column.style.border = "1px solid red";
        
        return column;
    }

    private getRandomColor(): string {
        let possibilities: Array<string | number> = [0,1,2,3,4,5,6,7,8,9,"a", "b", "c", "d", "e", "f"];
        let result: Array<string | number> = ["#"];

        for(let index = 0; index < 6; index++) {
            let randomIndex = generateRandomNumber(possibilities.length);;
            result.push(possibilities[randomIndex]);
        }

        return result.join('');
    }
}

/* use in main.ts

import { Fibonacci } from "./katas/fibonacci";

let instance = new Fibonacci(50, document.querySelector("#fibonacci") as HTMLElement);
instance.start();

*/