class Statistics extends Storage {
    lastResult;
    lastTime;
    lastDatе;
    countAttempts;
    averageResult;

    constructor() {
        super();
        console.log('Statistic');
        let currentCourse = this.data.currentCourse;
        this.lastResult = this.data[currentCourse].lastResult;
        this.lastTime = this.data[currentCourse].lastTime;
        this.lastDatе = this.data[currentCourse].lastDate;
        this.countAttempts = this.data[currentCourse].countAttempts;
        this.averageResult = this.data[currentCourse].averageResult;
        
    }

    increaseCountAttempts() {
        this.countAttempts++;
    }

    calculateAverageResult(lastResult) {
        this.averageResult = (this.averageResult * this.countAttempts + lastResult)/(this.countAttempts + 1);
    }

    fixLastDatе() {
        this.lastDatе = Date.now();
    }


}