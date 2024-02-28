// 
var currentQuestionIndex = 0;
var time = question.length * 10;
var timerId; 

var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');

var sfxRight = new Audio()
var sfxWrong = new Audio()

