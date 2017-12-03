import { Maze } from './maze';
import { Position, Direction, charDirections } from './structures';

export class MazeSearch {
    private exitPositions: string[] = [];

    constructor(private maze: Maze) {

    }

    countExits(): string[] {
        let currentPosition = {row: 0, column: 0};
        let currentToken = this.maze.getToken(currentPosition);
        let nextDirections = charDirections.get(currentToken);

        this.next(currentPosition, nextDirections![0], []);
        return this.exitPositions;
    }
    
    private next(currentPosition: Position, directionSource: Direction, path: Position[]) {
        path.push(currentPosition);
        let currentToken = this.maze.getToken(currentPosition);
        
        let nextDirections = charDirections.get(currentToken);

        for (let direction of nextDirections!) {
            if (direction == "CONTINUE") {
                direction = directionSource;
            }

            let nextPosition = this.move(currentPosition, direction);

            if (this.isCollision(nextPosition, path)) {
                continue;
            }
            
            if(this.isExit(nextPosition)) {
                this.addExit(currentPosition, currentToken);
                continue;
            }

            this.next(Object.assign({}, nextPosition), direction, path.slice());
        }
    }

    private move(currentPosition: Position, direction: Direction): Position {
        switch(direction) {
            case "UP":
                return {
                    row: currentPosition.row - 1,
                    column: currentPosition.column
                }
            case "DOWN":
                return {
                    row: currentPosition.row + 1,
                    column: currentPosition.column
                }
            case "LEFT":
                return {
                    row: currentPosition.row,
                    column: currentPosition.column - 1
                }
            case "RIGHT":
                return {
                    row: currentPosition.row,
                    column: currentPosition.column + 1
                }
        }

        return currentPosition;
    }

    private isExit(position: Position) {
        let limits = this.maze.getLimits();
        if (position.column < 0 || position.column >= limits.columns) return true;
        if (position.row < 0 || position.row >= limits.rows) return true;
        return false;
    }

    private isCollision(position: Position, path: Position[]) {
        return path.some(p => p.row == position.row && p.column == position.column);
    }

    private addExit(position: Position, currentToken: string) {
        let key = position.row + "-" + position.column;

        if (this.exitPositions.indexOf(key) == -1) {
            this.exitPositions.push(key);
        }
    }
}