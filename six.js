const correctAnswer = "26022"; // Correct answer for Q1

const submitBtn = document.getElementById("submit");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next");

submitBtn.addEventListener("click", checkAnswer);

function checkAnswer() {
  const userAnswer = answerInput.value.trim();

  if(userAnswer === correctAnswer) {
    feedback.textContent = "Maths loves you back...";
    feedback.style.color = "black";
    nextBtn.style.display = "inline-block";
    answerInput.disabled = true;
    submitBtn.disabled = true;
  } else {
    const poeticMessages = [
      "Error 404: That number isn't found. Try again.",
      "The stars seem confused by that number. Attempt once more.",
      "The answer doesn't seem right, uh oh...",
      "The heart beats, but your number falters. Retry."
    ];
    const randomMsg = poeticMessages[Math.floor(Math.random() * poeticMessages.length)];
    feedback.textContent = randomMsg;
    feedback.style.color = "#ff5555";
  }
}

function goNext() {
  // Replace with actual link to Q2
  window.location.href = "final.html";
}