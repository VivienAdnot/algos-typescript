import { LawmMowerDriver } from './drive';

export function test_lawnMowerDriver() {
    let driver = new LawmMowerDriver({
        rows: 5,
        columns: 5,
        initialPosition: {
            row: 1,
            column: 2,
            direction: 'N'
        },
        path: ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A']
    });

    console.log(driver.start());
};