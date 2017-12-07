export type Direction = "N" | "E" | "S" | "W";
export type Move = "G" | "D" | "A";

export interface IPosition {
    x: number;
    y: number;
    direction: Direction;
}

export interface Lawn {
    width: number;
    height: number;
}

export interface IPath {
    initialPosition: IPosition,
    moves: Move[]
};

export let rotateClockWise = new Map<Direction, Direction>();
rotateClockWise.set("N", "E");
rotateClockWise.set("E", "S");
rotateClockWise.set("S", "W");
rotateClockWise.set("W", "N");

export let rotateAntiClockWise = new Map<Direction, Direction>();
rotateAntiClockWise.set("N", "W");
rotateAntiClockWise.set("W", "S");
rotateAntiClockWise.set("S", "E");
rotateAntiClockWise.set("E", "N");