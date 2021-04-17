class Operation {
    arrayExamples = [];
    countExamples;
    operandMax;
    operandMin;

    constructor(type, difficultLevel = 1, courses) {
        this.countExamples = difficultLevel * 10;
        this.operandMin = PARAMS.difficulty[type][difficultLevel-1][0];
        this.operandMax = PARAMS.difficulty[type][difficultLevel-1][1];

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
    }

    getArraySumm(level) {
        for ( let i = this.operandMax; i > this.operandMin; i--) {
            console.log(i);
            for (let j = 1; j < i; j++) {
                this.arrayExamples.push([i - j + ' + ' + j, i ]);
            }
        }
        this.arrayExamples = this.cropArray(this.arrayExamples);
    }

    getArrayDiff(level) {
        for ( let i = this.operandMax; i > this.operandMin; i--) {
            for (let j = 1; j < i; j++) {
                this.arrayExamples.push([i + ' - ' + j, i - j ]);
            }
        }
        this.arrayExamples = this.cropArray(this.arrayExamples);
    }

    getArrayMult(level) {
        for ( let i = this.operandMax; i >= this.operandMin; i--) {
            for (let j = 2; j <= 10; j++) {
                this.arrayExamples.push([i + ' * ' + j, i * j ]);
            }
        }
        this.arrayExamples = this.cropArray(this.arrayExamples);
    }

    getArrayDiv(level) {
        for ( let i = this.operandMax; i >= this.operandMin; i--) {
            for (let j = 2; j <= 10; j++) {
                this.arrayExamples.push([i * j + ' / ' + i, j ]);
            }
        }
        this.arrayExamples = this.cropArray(this.arrayExamples);
    }

    cropArray(array) {
        let resultArr = [];
        let lenghtArr = array.length-1;
        for (let i = 1; i <= this.countExamples; i++) {
            let n =  Math.floor(Math.random() * lenghtArr--);
            resultArr.push( array.splice(n, 1));
        }
        return resultArr;
    }
}