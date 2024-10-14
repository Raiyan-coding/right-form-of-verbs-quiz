const questions = [
    
    
        {
            question: "Choose the correct form of the verb: 'She _____ her homework every day.'",
            options: ["do", "does", "doing", "done"],
            answer: "does"
        },
        {
            question: "Identify the right form of the verb: 'He _____ to school yesterday.'",
            options: ["go", "goes", "gone", "went"],
            answer: "went"
        },
        {
            question: "Select the correct verb form: 'They _____ football in the evening.'",
            options: ["play", "plays", "playing", "played"],
            answer: "play"
        },
        {
            question: "Choose the appropriate form of the verb: 'The baby _____ loudly when he is hungry.'",
            options: ["cry", "cries", "crying", "cried"],
            answer: "cries"
        },
        {
            question: "Which form of the verb is correct? 'The sun _____ in the east.'",
            options: ["rise", "rises", "rising", "rose"],
            answer: "rises"
        },
        {
            question: "Fill in the blank: 'He _____ a letter to his friend last week.'",
            options: ["write", "writes", "writing", "wrote"],
            answer: "wrote"
        },
        {
            question: "Choose the right form: 'The birds _____ in the sky.'",
            options: ["fly", "flies", "flying", "flown"],
            answer: "fly"
        },
        {
            question: "Identify the correct verb form: 'Water _____ at 100 degrees Celsius.'",
            options: ["boil", "boils", "boiling", "boiled"],
            answer: "boils"
        },
        {
            question: "Select the appropriate verb form: 'He _____ his keys at home yesterday.'",
            options: ["forget", "forgets", "forgot", "forgotten"],
            answer: "forgot"
        },
        {
            question: "Choose the correct option: 'The dog _____ at strangers.'",
            options: ["bark", "barks", "barking", "barked"],
            answer: "barks"
        },
        {
            question: "Fill in the blank: 'I _____ my homework before dinner yesterday.'",
            options: ["finish", "finishes", "finished", "finishing"],
            answer: "finished"
        },
        {
            question: "Which form of the verb is correct? 'She _____ to the market every Saturday.'",
            options: ["go", "goes", "going", "gone"],
            answer: "goes"
        },
        {
            question: "Choose the right form: 'The teacher _____ the students to study hard.'",
            options: ["advise", "advises", "advising", "advised"],
            answer: "advises"
        },
        {
            question: "Select the correct verb form: 'The children _____ in the park every afternoon.'",
            options: ["play", "plays", "playing", "played"],
            answer: "play"
        },
        {
            question: "Identify the correct form: 'She _____ for the exam last week.'",
            options: ["prepare", "prepares", "preparing", "prepared"],
            answer: "prepared"
        },
        {
            question: "Choose the right form of the verb: 'The flowers _____ beautifully in the garden.'",
            options: ["bloom", "blooms", "blooming", "bloomed"],
            answer: "bloom"
        },
        {
            question: "Fill in the blank: 'He _____ his breakfast before leaving for school.'",
            options: ["eat", "eats", "ate", "eating"],
            answer: "ate"
        },
        {
            question: "Select the appropriate form: 'The clock _____ midnight.'",
            options: ["strike", "strikes", "striking", "struck"],
            answer: "strikes"
        },
        {
            question: "Choose the correct verb form: 'The cat _____ on the mat.'",
            options: ["sit", "sits", "sitting", "sat"],
            answer: "sits"
        },
        {
            question: "Identify the right form: 'He _____ the book on the table.'",
            options: ["place", "places", "placing", "placed"],
            answer: "placed"
        }
    
    
    
    
];

let score = 0;

const questionsContainer = document.getElementById("questions");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");
const quizForm = document.getElementById("quiz-form");

function loadQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            ${q.options.map((option, idx) => `
                <div>
                    <input type="radio" name="question${index}" id="q${index}option${idx}" value="${option}" />
                    <label for="q${index}option${idx}">${idx + 1}. ${option}</label>
                </div>
            `).join("")}
        `;
        questionsContainer.appendChild(questionDiv);
    });
}

quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    score = 0;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    showResult();
});

restartButton.addEventListener("click", () => {
    resultElement.style.display = "none";
    questionsContainer.innerHTML = "";
    loadQuestions();
});

function showResult() {
    questionsContainer.innerHTML = ""; // Clear questions
    resultElement.style.display = "block"; // Show result container
    scoreElement.innerText = `${score} out of ${questions.length}`;
}

loadQuestions();
