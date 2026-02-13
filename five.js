const correctAnswer = "22620"; // Correct answer for Q1

const submitBtn = document.getElementById("submit");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next");

submitBtn.addEventListener("click", checkAnswer);

function checkAnswer() {
  const userAnswer = answerInput.value.trim();

  if(userAnswer === correctAnswer) {
    feedback.textContent = "Smooth. Effortless. Damnnnn...";
    feedback.style.color = "black";
    nextBtn.style.display = "inline-block";
    answerInput.disabled = true;
    submitBtn.disabled = true;
  } else {
    const poeticMessages = [
       "Oops, wrong answer babe.",
      "Plot twist! That number isn't quite right. Try again.",
      "The answer doesn't seem right, uh oh...",
      "Nice try, try again."
    ];
    const randomMsg = poeticMessages[Math.floor(Math.random() * poeticMessages.length)];
    feedback.textContent = randomMsg;
    feedback.style.color = "#ff5555";
  }
}

function goNext() {
  // Replace with actual link to Q2
  window.location.href = "six.html";
}