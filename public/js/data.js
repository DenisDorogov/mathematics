const STORAGE_DEFAULT = {
    name: 'worldofmathematics',
    user: 'default',
    currentCourse: 'summ',
    currentDifficulty: '1',
    summ: {
        lastDate: Date.now(),
        lastTime: undefined,
        countAttempts: 0,
        averageResult: 0,
        lastResult: 0,
    },
    diff: {
        lastDate: Date.now(),
        lastTime: undefined,
        countAttempts: 0,
        averageResult: 0,
        lastResult: 0,
    },
    mult: {
        lastDate: Date.now(),
        lastTime: undefined,
        countAttempts: 0,
        averageResult: 0,
        lastResult: 0,
    },
    div: {
        lastDate: Date.now(),
        lastTime: undefined,
        countAttempts: 0,
        averageResult: 0,
        lastResult: 0,
    },
    mixed: {
        lastDate: Date.now(),
        lastTime: undefined,
        countAttempts: 0,
        averageResult: 0,
        lastResult: 0,
    },
    resetDate: Date.now()
};

const PARAMS = {
    difficulty: {
        summ: [[1, 10], [1, 20], [1, 100], [19, 100]],
        diff: [[10, 0], [20, 0], [100, 0], [100,20]],
        mult: [[1,4], [3, 6], [5, 9], [2, 10]],
        div: [[1,4], [3, 6], [5, 9], [2, 10]],
        mix: []
    },
};