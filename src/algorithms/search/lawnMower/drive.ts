import { Position, Movement, rotateClockWise, rotateAntiClockWise } from './structures';

export interface LawmMowerContext {
    rows: number;
    columns: number;
    initialPosition: Position;
    path: Movement[];
}

export class LawmMowerDriver {
    private currentPosition: Position;
    constructor(private context: LawmMowerContext) {

    }

    start() {
        this.currentPosition = this.context.initialPosition;
        this.nextFor();
        return this.currentPosition;
    }

    nextFor() {
        for (let i = 0; i < this.context.path.length; i++) {
            console.log("start for", i, this.currentPosition);
            let nextPosition = this.moveForwardOrRotate(this.currentPosition, this.context.path[i]);
            console.log("nextPosition", nextPosition);
            
            if (this.isExit(nextPosition)) {
                console.log("nextPosition is exit");
                continue;
            } else {
                this.currentPosition = nextPosition;
            }
        }
    }

    moveForwardOrRotate(currentPosition: Position, movement: Movement): Position {
        switch(movement) {
            case "G":
                return {
                    row: currentPosition.row,
                    column: currentPosition.column,
                    direction: rotateAntiClockWise.get(currentPosition.direction)!
                }
            case "D":
                return {
                    row: currentPosition.row,
                    column: currentPosition.column,
                    direction: rotateClockWise.get(currentPosition.direction)!
                }
            case "A":
                return this.moveForward(currentPosition);
        }
    }

    moveForward(currentPosition: Position): Position {
        switch(currentPosition.direction) {
            case "N":
                return {
                    row: currentPosition.row - 1,
                    column: currentPosition.column,
                    direction: currentPosition.direction
                }
            case "E":
                return {
                    row: currentPosition.row,
                    column: currentPosition.column + 1,
                    direction: currentPosition.direction
                }
            case "S":
                return {
                    row: currentPosition.row + 1,
                    column: currentPosition.column,
                    direction: currentPosition.direction
                }
            case "W":
                return {
                    row: currentPosition.row,
                    column: currentPosition.column - 1,
                    direction: currentPosition.direction
                }
        }
    }

    isExit(position: Position) {
        if (position.column < 0 || position.column >= this.context.columns) return true;
        if (position.row < 0 || position.row >= this.context.rows) return true;
        return false;
    }    
}