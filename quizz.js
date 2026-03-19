// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("results-message"); // FIXED: was "result-message"
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "Who is the founder of XRT SOFTWARES?",
    answers: [
      { text: "David Cyril", correct: false },
      { text: "Carl Williams", correct: true },
      { text: "Z4CH inc", correct: false },
      { text: "Tylor", correct: false }
    ]
  },
  {
    question: "Which of this is not a programming language?",
    answers: [
      { text: "Flutter", correct: false },
      { text: "Python", correct: true },
      { text: "JavaScript", correct: false },
      { text: "HTML", correct: true }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Michelangelo", correct: false },
      { text: "Raphael", correct: false },
      { text: "Caravaggio", correct: false }
    ]
  },
  {
    question: "What is the largest mammal on Earth?",
    answers: [
      { text: "Blue Whale", correct: true },
      { text: "Fin Whale", correct: false },
      { text: "Humpback Whale", correct: false },
      { text: "Sperm Whale", correct: false }
    ]
  },
  {
    question: "Who sent you this scripts 😂?",
    answers: [
      { text: "Mzee kijana", correct: false },
      { text: "Z4CH", correct: true },
      { text: "Jared", correct: false },
      { text: "Austin kim", correct: false }
    ]
  }
];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;
totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  showQuestion();
}

function showQuestion() {
  answerDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";
  questionText.textContent = currentQuestion.question;
  answerContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answerDisabled) return;
  answerDisabled = true;
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  Array.from(answerContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScoreSpan.textContent = score;
  const percentage = (score / quizQuestions.length) * 100;
  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You are a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great Job! You know your stuff";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! You know your stuff!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "wahh bro si usome tu!";
  } else {
    resultMessage.textContent = "keep studying! utamake!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
  startQuiz();
}
