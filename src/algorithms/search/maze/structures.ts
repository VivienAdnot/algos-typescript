export type Direction = "UP" | "RIGHT" | "DOWN" | "LEFT" | "CONTINUE";

export interface Position {
    row: number;
    column: number;
}

export let charDirections = new Map<string, Direction[]>();
charDirections.set('^', ["UP"]);
charDirections.set('>', ["RIGHT"]);
charDirections.set('<', ["LEFT"]);
charDirections.set('v', ["DOWN"]);
charDirections.set('|', ["UP", "DOWN"]);
charDirections.set('-', ["LEFT", "RIGHT"]);
charDirections.set('?', ["UP", "RIGHT", "DOWN", "LEFT"]);
charDirections.set(' ', ["CONTINUE"]);