const numberRange = document.getElementById("numberRange");
const guess = document.getElementById("guess");
const answer = document.getElementById("answer");
const answer2 = document.getElementById("answer2");
const submit = document.getElementById("mySubmit");
const backBtn = document.getElementById("backBtn");

max = Math.floor(Math.random() * 1000);
min = 0;
daNumber = Math.floor(Math.random() * max);

numberRange.textContent = `0 to ${max}`;

submit.onclick = function () {
  console.log(daNumber);
  if (guess.value) {
    if (guess.value < daNumber) {
      answer.textContent = `Guess Higher!`;
      answer2.textContent = "";
    }
    if (guess.value > daNumber) {
      answer.textContent = `Guess Lower!`;
      answer2.textContent = "";
    }
    if (guess.value == daNumber) {
      answer.textContent = `You Got It!`;
      answer2.textContent = "Guess the new number";
      max = Math.floor(Math.random() * 1000);
      min = 0;
      daNumber = Math.floor(Math.random() * max);
      numberRange.textContent = `0 to ${max}`;
    }
  } else {
    answer.textContent = `You guessed nothing? But why tho?`;
    answer2.textContent = "";
  }
};

backBtn.onclick = function () {
  window.location.href = "../../index.html";
};
