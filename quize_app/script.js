const quizContainer = document.getElementById("quiz-container");

// Variables to manage score and the game
let score = 0;
const winningScore = 10; // Number of correct answers to win

async function fetchQuestions() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
  );
  const data = await response.json();
  return data.results;
}

async function displayQuiz() {
  const questions = await fetchQuestions();

  questions.forEach((question, index) => {
    // Create a div for the question block
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-block");

    // Add question number and text
    const questionHeading = document.createElement("h2");
    questionHeading.textContent = `Question ${index + 1}`;
    questionDiv.appendChild(questionHeading);

    const questionText = document.createElement("p");
    questionText.textContent = question.question;
    questionDiv.appendChild(questionText);

    // Shuffle and display options
    const options = [...question.incorrect_answers, question.correct_answer];
    options.sort(() => Math.random() - 0.5);

    options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-button");
      button.addEventListener("click", () =>
        handleAnswer(option, question.correct_answer)
      );
      questionDiv.appendChild(button);
    });

    quizContainer.appendChild(questionDiv);
  });
}

function handleAnswer(selected, correct) {
  if (selected === correct) {
    score++; // Increase score
    alert(`Correct! Your score is now ${score}.`);
  } else {
    score = 0; // Reset score
    alert(`Wrong! Your score has been reset to ${score}.`);
  }

  // Check if the player has won
  if (score === winningScore) {
    displayCongratulations();
  }
}

function displayCongratulations() {
  // Clear the quiz container
  while (quizContainer.firstChild) {
    quizContainer.removeChild(quizContainer.firstChild);
  }

  // Add congratulatory message
  const congratsHeading = document.createElement("h1");
  congratsHeading.textContent = "Congratulations!";
  congratsHeading.style.color = "green";
  quizContainer.appendChild(congratsHeading);

  const congratsText = document.createElement("p");
  congratsText.textContent = `You answered ${winningScore} questions correctly!`;
  quizContainer.appendChild(congratsText);

  // Add a Restart button
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Quiz";
  restartButton.addEventListener("click", restartQuiz);
  quizContainer.appendChild(restartButton);
}

function restartQuiz() {
  score = 0; // Reset the score
  while (quizContainer.firstChild) {
    quizContainer.removeChild(quizContainer.firstChild);
  }
  displayQuiz(); // Reload the quiz
}

// Start the quiz
displayQuiz();
