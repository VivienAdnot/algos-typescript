export class QueryPerSecond {
    private secondsPerMinute = 60;
    private minutesPerHour = 60;
    private houPerDay = 24;

    public getTotalPerDay(qps: number) {
        return qps * this.getTotalRequestPerSecondPerDay();
    }

    private getTotalRequestPerSecondPerDay() {
        return 1 * this.secondsPerMinute * this.minutesPerHour * this.houPerDay;
    }
}