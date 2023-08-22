const startButton = document.getElementById("start-btn");
const quizUserInfo = document.querySelector(".quiz-user-info");
const usernameInput = document.getElementById("name");
const userGreeting = document.getElementById("user-greeting");
const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const resultContainer = document.getElementById("result");
const userScore = document.getElementById("user-score");
const timeDisplay = document.getElementById("time");
const timer = document.getElementById("timer");
const finalScore = document.getElementById("final-score");
const totalScore = document.getElementById("total-score");
const resultBtn = document.querySelector(".result-btn");

let timeLeft = 600;

let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "Which country won the FIFA World Cup in 2018?",
        answers: [
            { text: "France", correct: true },
            { text: "Brazil", correct: false },
            { text: "Germany", correct: false },
            { text: "Argentina", correct: false },
        ],
    },
    {
        question:
            "Who played the character of Iron Man in the Marvel Cinematic Universe?",
        answers: [
            { text: "Chris Hemsworth", correct: false },
            { text: "Chris Evans", correct: false },
            { text: "Robert Downey Jr.", correct: true },
            { text: "Mark Ruffalo", correct: false },
        ],
    },
    {
        question: "Who wrote the novel 'To Kill a Mockingbird'?",
        answers: [
            { text: "J.D. Salinger", correct: false },
            { text: "Harper Lee", correct: true },
            { text: "George Orwell", correct: false },
            { text: "Ernest Hemingway", correct: false },
        ],
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false },
        ],
    },
    {
        question: "Which movie won the Academy Award for Best Picture in 2020?",
        answers: [
            { text: "1917", correct: false },
            { text: "Joker", correct: false },
            { text: "Parasite", correct: true },
            { text: "Once Upon a Time in Hollywood", correct: false },
        ],
    },
    {
        question:
            "In Shakespeare's play 'Romeo and Juliet', which family does Juliet belong to?",
        answers: [
            { text: "Capulet", correct: true },
            { text: "Montague", correct: false },
        ],
    },
    {
        question: "Which sport is played at Augusta National Golf Club?",
        answers: [
            { text: "Tennis", correct: false },
            { text: "Soccer", correct: false },
            { text: "Golf", correct: true },
            { text: "Cricket", correct: false },
        ],
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
        ],
    },
    {
        question:
            "Which actor played the character of Jack Dawson in the movie 'Titanic'?",
        answers: [
            { text: "Leonardo DiCaprio", correct: true },
            { text: "Brad Pitt", correct: false },
            { text: "Tom Hanks", correct: false },
            { text: "Johnny Depp", correct: false },
        ],
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false },
        ],
    },
    {
        question: "Which book series is authored by J.K. Rowling?",
        answers: [
            { text: "The Hunger Games", correct: false },
            { text: "Percy Jackson", correct: false },
            { text: "Harry Potter", correct: true },
            { text: "Twilight", correct: false },
        ],
    },
    {
        question: "Which basketball player is often referred to as 'King James'?",
        answers: [
            { text: "Kobe Bryant", correct: false },
            { text: "Michael Jordan", correct: false },
            { text: "LeBron James", correct: true },
            { text: "Shaquille O'Neal", correct: false },
        ],
    },
    {
        question:
            "What is the title of the first 'Star Wars' movie released in 1977?",
        answers: [
            { text: "Star Wars: Episode IV - A New Hope", correct: true },
            { text: "Star Wars: The Phantom Menace", correct: false },
            { text: "Star Wars: The Empire Strikes Back", correct: false },
            { text: "Star Wars: Return of the Jedi", correct: false },
        ],
    },
    {
        question: "In which year did the Berlin Wall fall?",
        answers: [
            { text: "1989", correct: true },
            { text: "1991", correct: false },
            { text: "1986", correct: false },
            { text: "1993", correct: false },
        ],
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        answers: [
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false },
        ],
    },
    {
        question: "Who wrote the play 'Macbeth'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "George Orwell", correct: false },
        ],
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false },
        ],
    },
    {
        question: "Who directed the movie 'The Shawshank Redemption'?",
        answers: [
            { text: "Steven Spielberg", correct: false },
            { text: "Martin Scorsese", correct: false },
            { text: "Frank Darabont", correct: true },
            { text: "Quentin Tarantino", correct: false },
        ],
    },
    {
        question:
            "Which planet is known as the 'Morning Star' or the 'Evening Star'?",
        answers: [
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: false },
        ],
    },
    {
        question: "Which novel features a character named Holden Caulfield?",
        answers: [
            { text: "The Great Gatsby", correct: false },
            { text: "Catcher in the Rye", correct: true },
            { text: "Brave New World", correct: false },
            { text: "Moby-Dick", correct: false },
        ],
    },
];

shuffleArray(questions);

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    const username = usernameInput.value;
    if (username === "") {
        alert("Please enter a username.");
        return;
    }

    startButton.classList.add("hidden");
    usernameInput.classList.add("hidden");
    quizUserInfo.style.display = "none";
    quizContainer.classList.remove("hidden");

    userGreeting.textContent = `Welcome ${username} !`;

    displayNextQuestion();
    startTimer();
}

function startTimer() {
    const interval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        if (timeLeft === 0) {
            clearInterval(interval);
            showResults();
        }
        timeLeft--;
    }, 1000);
}

function displayNextQuestion() {
    clearQuestionContainer();
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion(question) {
    questionContainer.innerHTML = `<div class='q-no'>${currentQuestionIndex + 1
        }</div> <span>${question.question}</span>`;
    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function clearQuestionContainer() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(isCorrect) {
    const selectedAnswerIndex = questions[currentQuestionIndex].answers.findIndex(
        (answer) => answer.correct === isCorrect
    );

    questions[currentQuestionIndex].selectedAnswerIndex = selectedAnswerIndex;

    if (isCorrect) {
        score++;
    }

    currentQuestionIndex++;
    displayNextQuestion();
}

function showResults() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    finalScore.innerHTML = `Your Score <span>${score} / ${questions.length}</span> `;
}

resultBtn.addEventListener("click", () => {
    window.location.reload();
});
