import { Position } from './structures';

export class Maze {
    private layout: string[][];

    constructor(layout: string[][]) {
        this.layout = layout;
    }

    getToken(position: Position): string {
        return this.layout[position.row][position.column];
    }

    getLimits() {
        return {
            rows: this.layout.length,
            columns: this.layout[0].length
        }
    }
}