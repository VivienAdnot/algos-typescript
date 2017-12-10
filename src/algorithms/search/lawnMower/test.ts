import { LawnMower } from './lawnMower';

export function test_lawnMower() {
    let lawnMowerA = new LawnMower({
        width: 5,
        height: 5
    });

    console.log(lawnMowerA.mow({
        initialPosition: {
            x: 1,
            y: 2,
            direction: 'N'
        },
        moves: ['L', 'F', 'L', 'F', 'L', 'F', 'L', 'F', 'F']
    }));

    let lawnMowerB = new LawnMower({
        width: 5,
        height: 5
    });
    
    console.log(lawnMowerB.mow({
        initialPosition: {
            x: 3,
            y: 3,
            direction: 'E'
        },
        moves: ['F', 'F', 'R', 'F', 'F', 'R', 'F', 'R', 'R', 'F']
    }));
};