const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Paris", correct: true},
            {text: "Rome", correct: false}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Venus", correct: false}
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            {text: "Heart", correct: false},
            {text: "Liver", correct: false},
            {text: "Skin", correct: true},
            {text: "Brain", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

let userAnswers = []; // This will store the index of the answer the user chose
let currentQuestionIndex = 0;
let score=0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = []; // Reset the user's previous answers
    nextButton.innerHTML = "Next";
    restartButton.style.display = "none"; // Hide restart button when playing
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];

    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    
    // Remove 'selected' class from all buttons to toggle highlight
    Array.from(answerButtons.children).forEach(button => {
        button.classList.remove("selected-choice");
    });
    
    // Highlight the clicked one
    selectedBtn.classList.add("selected-choice");

    // Save the choice (index) for this specific question
    const answerIndex = Array.from(answerButtons.children).indexOf(selectedBtn);
    userAnswers[currentQuestionIndex] = answerIndex;

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    
    // 1. Calculate the score
    score = 0;
    questions.forEach((question, index) => {
        if(userAnswers[index] !== undefined && question.answers[userAnswers[index]].correct){
            score++;
        }
    });

    // 2. Check for a perfect score
    if (score === questions.length) {
        questionElement.innerHTML = `Huray! Perfect score! 🥳`;
    } else if (score >= questions.length / 2) {
        questionElement.innerHTML = `Good job! You scored ${score} out of ${questions.length} 👍`;
    } else {
        questionElement.innerHTML = `Better luck next time! You scored ${score} out of ${questions.length} ✌️`;
    }
    
    // 3. Show the buttons
    nextButton.innerHTML = "View Analysis";
    nextButton.style.display = "block";
    restartButton.style.display = "block";
}

function showAnalysis() {
    resetState();
    questionElement.innerHTML = "Quiz Analysis";
    
    questions.forEach((question, index) => {
        const qDiv = document.createElement("div");
        qDiv.classList.add("analysis-item");
        
        const userChoice = question.answers[userAnswers[index]];
        const correctChoice = question.answers.find(a => a.correct);
        
        qDiv.innerHTML = `
            <p><strong>Q${index + 1}: ${question.question}</strong></p>
            <p class="${userChoice.correct ? 'correct-text' : 'incorrect-text'}">
                Your Answer: ${userChoice.text}
            </p>
            ${!userChoice.correct ? `<p class="correct-text">Correct Answer: ${correctChoice.text}</p>` : ''}
            <hr>
        `;
        answerButtons.appendChild(qDiv);
    });

    nextButton.innerHTML = "Restart Quiz";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else if (nextButton.innerHTML === "View Analysis") {
        showAnalysis();
    } else {
        startQuiz();
    }
});

restartButton.addEventListener("click", startQuiz);

startQuiz();
