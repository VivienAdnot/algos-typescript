export class TestEmptyCallback {
    private cb: () => void;
    private intervalId: number;

    constructor(cb: () => void) {
        this.cb = cb;
    }

    public runAsync() {
        this.intervalId = window.setInterval(() => {
            this.cb();
        }, 200);
    }

    public cancelCb() {
        this.cb = () => { return; };
    }

    public stop() {
        window.clearInterval(this.intervalId);
    }
}