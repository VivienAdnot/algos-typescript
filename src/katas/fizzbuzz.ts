export class FizzBuzz {
    private min: number;
    private max: number;

    constructor(min:number, max:number) {
        this.min = min;
        this.max = max;
    }

    private containsDigit(currentNumber:number, digit: number) {
        var numberAsString:string = currentNumber + "";
        return numberAsString.indexOf(digit + "") != -1;
    }

    private shouldPrintFizzBuzz(currentNumber: number) {
        return (currentNumber % 3 == 0 && currentNumber % 5 == 0);
    }

    private shouldPrintFizz(currentNumber: number) {
        return (currentNumber % 3 == 0 || this.containsDigit(currentNumber, 3));
    }

    private shouldPrintBuzz(currentNumber: number) {
        return (currentNumber % 5 == 0 || this.containsDigit(currentNumber, 5));
    }

    public print() {
        for(var i = this.min; i < this.max; i++) {
            if(this.shouldPrintFizzBuzz(i)) {
                console.log("FizzBuzz");
            } else if (this.shouldPrintFizz(i)) {
                console.log("Fizz");
            } else if(this.shouldPrintBuzz(i)) {
                console.log("Buzz");
            } else {
                console.log(i)
            }
        }
    }
}
