// declare variables.
var currentQuestion = 0;
var score = 0;
var c = 60;
var totquestions = questions.length;
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextBtn = document.getElementById("next");
var startBtn = document.getElementById("start");
var subBtn = document.getElementById("submit");
var result = document.getElementById("result");


// load question and choices
function loadQuestion (questionIndex) {
  document.getElementById("start").disabled = true;
  var q = questions[questionIndex];
  questionEl.textContent = (questionIndex + 1) + '. ' q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
};
// covers all questions - check if selected option is correct - if correct add to score - if wrong move to next question. when all questions are answered stop clock and display score


//Calculate score.
// function calcScore(){
//     document.getElementById("result").score;
//     return;

//Stopwatch
var myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  function myClock() {
    document.getElementById("timer").innerHTML = c--;
    if (c == 0) {
    clearInterval(myTimer);
    }
  }
}