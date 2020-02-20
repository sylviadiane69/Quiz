var timeEl = document.querySelector("time");
var mainEl = document.getElementById("Btn1");

var Btn1El = document.getElementById

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " time remaining for quiz.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

}

setTime();

var questions = [
    {
        prompt: "What is HTML?\n(A) Hyper Text Math Language\n\
                (B) HyperText Markup Language\n(C) HyperText Mode Law",
        answer: "B"    
    },
    {
        prompt: "What is CSS?\n(A) Cascading Style Sheet\n\
                (B) Cascading Sheet Style\n(C) Case Sensitive Style",
        answer: "A"
    },
    {
        prompt: "Who created Bootstrap?\n(A) Instagram\n\
                (B) Google\n(C) Twitter",
    }]


for (var i = 0; i = questions.length; i++) {
    var response = window.prompt(questions[i].prompt)
    if (response == questions[i].answer) {
        score++;
        alert("That's right!");
    } else {
        alert("Sorry, that's wrong");
    }

}

