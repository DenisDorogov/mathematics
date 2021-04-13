class Operation {
    arrayExamples = [];
    countExamples;
    operandMax;
    operandMin;

    constructor(type, difficultLevel = 1, courses) {
        switch (type) {
            case 'summ':
                this.getArraySumm(difficultLevel);
                break;
            case 'diff':
                this.getArrayDiff(difficultLevel);
                break;
            case 'mult':
                this.getArrayMult(difficultLevel);
                break;
            case 'div':
                this.getArrayDiv(difficultLevel);
                break;
            case 'mix':
                this.getArrayMix(difficultLevel,courses);
                break;
            default:
                break;
        }
        this.countExamples = difficultLevel * 10;
        this.operandMin = PARAMS.difficulty[type][difficultLevel][0];
        this.operandMax = PARAMS.difficulty[type][difficultLevel][1];
    }

    getArraySumm(level) {
        for ( let i = this.operandMax; i > this.operandMin; i--) {
            for (let j = 1; j < i; j++) {
                this.arrayExamples.push([i - j + ' + ' + j, i ]);
            }
        }

        console.log(this.operandMax);
        console.log(this.operandMin);
        console.log(this.arrayExamples);

    }

    getArrayDiff(level) {

    }

    getArrayMult(level) {

    }

    getArrayDiv(level) {

    }
}