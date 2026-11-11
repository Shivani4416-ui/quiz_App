
const questions = [
    {
        q: "What is the full form of HTML?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language"],
        answer: 0
    },
    {
        q: "Which language is used for styling web pages?",
        options: ["Java", "CSS", "Python"],
        answer: 1
    },
    {
        q: "Which language makes websites interactive?",
        options: ["HTML", "CSS", "JavaScript"],
        answer: 2
    },
    {
        q: "Which company developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google"],
        answer: 1
    },
    {
        q: "Which tag is used for a paragraph in HTML?",
        options: ["<p>", "<h1>", "<br>"],
        answer: 0
    }
];

let current = 0;
let score = 0;
let selected = -1;


function loadQuestion() {
    selected = -1;

    document.getElementById("question").innerText =
        questions[current].q;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questions[current].options.forEach((option, index) => {
        const btn = document.createElement("button");

        btn.className = "option";
        btn.textContent = option;

        btn.onclick = function() {
            selectOption(index);
        };

        optionsDiv.appendChild(btn);
    });
}


function selectOption(index) {
    selected = index;

    document.querySelectorAll(".option").forEach((btn, i) => {
        btn.classList.toggle("selected", i === index);
    });
}

function nextQuestion() {
    if (selected === -1) {
        alert("Please select an answer!");
        return;
    }

    if (selected === questions[current].answer) {
        score++;
    }

    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("score").innerText =
            "Your Score: " + score + " / " + questions.length;
    }
}

function restartQuiz() {
    current = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";
    loadQuestion();
}

loadQuestion();
