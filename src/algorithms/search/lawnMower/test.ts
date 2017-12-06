import { LawmMowerDriver } from './drive';

export function test_lawnMowerDriver() {
    console.log("test_lawnMowerDriver start");

    // let driver = new LawmMowerDriver({
    //     rows: 5,
    //     columns: 5,
    //     initialPosition: {
    //         row: 1,
    //         column: 2,
    //         direction: 'N'
    //     },
    //     path: ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A']
    // });

    let driver = new LawmMowerDriver({
        maxX: 5,
        maxY: 5,
        initialPosition: {
            row: 3,
            column: 3,
            direction: 'E'
        },
        path: ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'D', 'D', 'A']
    });

    console.log(driver.start());
};
