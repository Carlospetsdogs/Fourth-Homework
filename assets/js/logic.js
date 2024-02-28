// 
var currentQuestionIndex = 0;
var time = questions.length * 10;
var timerId; 

var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');

// sound effects here
var sfxRight = new Audio()
var sfxWrong = new Audio()

function startQuiz() {
    var startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute('class','hide');

    questionsEl.removeAttribute('class');

    timerId = setInterval(clockTick, 1000);

    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];


var titleEl = document.getElementById('question-title');
titleEl.textContent = currentQuestion.title;

choicesEl.innerHTML = '';

for (var i = 0; i < currentQuestion.choices.length; i++){
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class','choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '.' + choice;
}

}