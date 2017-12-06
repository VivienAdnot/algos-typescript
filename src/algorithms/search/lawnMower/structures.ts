export type Direction = "N" | "E" | "S" | "W";
export type Movement = "G" | "D" | "A";

export interface Position {
    row: number;
    column: number;
    direction: Direction;
}

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