import { IPosition, Move, IPath, ILawn, rotateClockWise, rotateAntiClockWise } from './structures';

export class LawmMower {
    lawn: ILawn;

    constructor(surface: ILawn) {
        this.lawn = surface;
    }

    drive(path: IPath): IPosition {
        let currentPosition = path.initialPosition;
        
        for (let move of path.moves) {
            let nextPosition = this.rotateOrMoveForward(currentPosition, move);

            if (this.isOut(nextPosition)) {
                continue;
            } else {
                currentPosition = nextPosition;
            }
        }

        return currentPosition;
    }

    private rotateOrMoveForward(currentPosition: IPosition, movement: Move): IPosition {
        switch(movement) {
            case "G":
                return {
                    x: currentPosition.x,
                    y: currentPosition.y,
                    direction: rotateAntiClockWise.get(currentPosition.direction)!
                }
            case "D":
                return {
                    x: currentPosition.x,
                    y: currentPosition.y,
                    direction: rotateClockWise.get(currentPosition.direction)!
                }
            case "A":
                return this.moveForward(currentPosition);
        }
    }

    private moveForward(currentPosition: IPosition): IPosition {
        switch(currentPosition.direction) {
            case "N":
                return {
                    x: currentPosition.x,
                    y: currentPosition.y + 1,
                    direction: currentPosition.direction
                }
            case "E":
                return {
                    x: currentPosition.x + 1,
                    y: currentPosition.y,
                    direction: currentPosition.direction
                }
            case "S":
                return {
                    x: currentPosition.x,
                    y: currentPosition.y -1,
                    direction: currentPosition.direction
                }
            case "W":
                return {
                    x: currentPosition.x - 1,
                    y: currentPosition.y,
                    direction: currentPosition.direction
                }
        }
    }

    private isOut(position: IPosition): boolean {
        if (position.y < 0 || position.y > this.lawn.height
            || position.x < 0 || position.x > this.lawn.width) {
            return true;
        }

        return false;
    }
}
