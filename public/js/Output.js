class Output extends Statistics {
    
    constructor() {
        super();
    };

    outputStatistics() {
        let parent = document.getElementById('stat-list');
    }

    outputQuestion(text) {
        let parent = document.getElementById('parent-question');
        let expression = document.createElement('div');
        let input = document.createElement('input');
        let button = document.createElement('div');

        expression.className = 'question-text';
        expression.innerText = text;


        input.className = 'question-input';
        button.className = 'question-button';

    }

    outputResultList() {
        let parent = document.getElementById('result-list');
        
    }

    

}