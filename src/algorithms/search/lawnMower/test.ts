import { LawmMower } from './drive';

export function test_lawnMowerDriver() {
    let lawmMowerA = new LawmMower({
        width: 5,
        height: 5
    });

    console.log(lawmMowerA.drive({
        initialPosition: {
            x: 1,
            y: 2,
            direction: 'N'
        },
        moves: ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A']
    }));

    let lawmMowerB = new LawmMower({
        width: 5,
        height: 5
    });
    
    console.log(lawmMowerB.drive({
        initialPosition: {
            x: 3,
            y: 3,
            direction: 'E'
        },
        moves: ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'D', 'D', 'A']
    }));
};