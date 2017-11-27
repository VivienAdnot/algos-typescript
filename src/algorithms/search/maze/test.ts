import { Maze } from "./maze";
import { MazeSearch } from './search';

export function test_mazeSearch() {
    let maze = new Maze([
        ['v', '?', '|', ' ', '<'],
        ['?', ' ', ' ', '?', ' '],
        ['?', ' ', '?', ' ', '|'],
        ['?', ' ', ' ', '-', ' '],
        ['>', ' ', '^', '?', '<']
    ]);

    let searcher = new MazeSearch(maze);
    console.log(searcher.countExits());
}