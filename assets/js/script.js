$(document).ready(function () {
  // Timer //
  var countdownNumberEl = document.getElementById("countdown-number");
  var countdown = 10;

  countdownNumberEl.textContent = countdown;

  setInterval(function () {
    countdown = --countdown <= 0 ? 10 : countdown;

    countdownNumberEl.textContent = countdown;
  }, 1000);

  // Toggle question //
  $(".btn-info").click(function () {
    $("#question-box").toggle();
  });

  scoreCount = 0;
  questionCount = 0;

  // Score count //
  function scoring() {
    const scoreCountElement = document.getElementById("score-number");
    scoreCount ++;
    scoreCountElement.textContent = scoreCount;
  }

  // Question count //

  function progress() {
    const questionCountElement = document.getElementById("question-number");
    questionCount++;
    questionCountElement.textContent = questionCount;
  }

  // Start Quiz //
  const popupStartBox = document.getElementById("start-popup");
  const startButton = document.getElementById("letsgo-btn");
  const gameHeaderElement = document.getElementById("game-header");
  const questionContainerElement = document.getElementById(
    "question-container"
  );
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");

  let shuffledQuestions, currentQuestionIndex;

  //Event listener to start game//
  startButton.addEventListener("click", startGame);

  //Function to start game//
  function startGame() {
    popupStartBox.classList.add("hide");
    gameHeaderElement.classList.remove("hide");
    questionContainerElement.classList.remove("hide");
    answerButtonsElement.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 1;
    setNextQuestion();
  }

  // Function to show next question//
  function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    $("#question-box").show();
    progress();
  }
  // Show question content from question array //
  function showQuestion(question) {
    questionElement.innerText = question.question;
  }

  // My questions //
  var questions = [
    {
      question: "In which region would you find a 'Brummie'?",
      correctAnswer: "west-midlands",
    },
    {
      question: "In which region would you find the Angel of the North?",
      correctAnswer: "yorkshire-and-the-humber",
    },
    {
      question: "In which region were the Beatles formed?",
      correctAnswer: "north-west",
    },
    {
      question: "In which region would you find Windsor Castle?",
      correctAnswer: "south-east",
    },
    {
      question: "Which region is home to Glastonbury Festival?",
      correctAnswer: "south-west",
    },
  ];

  // Select answer //
  $(".choice").on("click", function () {
    let userAnswer = $(this).attr("id");
    if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
      //sweet alerts2 //
      Swal.fire({
        icon: "success",
        title: "Correct Answer",
        showConfirmButton: false,
        timer: 1500,
      });
      currentQuestionIndex++;
      setNextQuestion();
      scoring()
    } else {
      //sweet alerts2 //
      Swal.fire({
        icon: "error",
        title: "Wrong Answer",
        showConfirmButton: false,
        timer: 1500,
      });
      currentQuestionIndex++;
      setNextQuestion();
    }
  });
  setNextQuestion();
});
