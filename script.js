let form = document.getElementById("question-form");
let question = document.getElementById("new-question");
let answerDiv = document.getElementById("answer");
let ball = document.getElementById("eightball");

ball.addEventListener("mouseover", getEightBall);

function getEightBall() {
  event.preventDefault();
  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.firstChild);
  }
  if (question.value === "") {
    noAnswer = document.createElement("p");
    noAnswer.innerHTML = "Ask a question first!";
    answerDiv.appendChild(noAnswer);
  } else {
    let userQuestion = question.value;
    return fetch(`https://8ball.delegator.com/magic/JSON/${userQuestion}`)
      .then(response => response.json())
      .then(json => renderEightBall(json.magic.answer));
  }
}

function renderEightBall(message) {
  pAnswer = document.createElement("p");
  pAnswer.innerHTML = message;
  setTimeout(function() {
      answerDiv.appendChild(pAnswer)}
      ,500);
}
