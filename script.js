// script.js

let questions = [
    {
        question: "¿Qué es una Promesa en JavaScript?",
        options: [
            "Un objeto que representa la eventual finalización o el fracaso de una operación asincrónica",
            "Una función que devuelve un valor al instante",
            "Una función que maneja errores",
            "Un ciclo que ejecuta código de forma asincrónica"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cómo se maneja el valor de una Promesa una vez que se ha resuelto?",
        options: [
            "Usando .then() para manejar la resolución",
            "Usando .catch() para manejar la resolución",
            "Usando .resolve() para manejar la resolución",
            "Usando .finally() para manejar la resolución"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué método de la Promesa se usa para manejar errores?",
        options: [
            ".catch()",
            ".then()",
            ".finally()",
            ".resolve()"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es una API en JavaScript?",
        options: [
            "Un conjunto de funciones predefinidas que permiten interactuar con otros servicios o recursos",
            "Una biblioteca que facilita el desarrollo de interfaces gráficas",
            "Un marco de trabajo para construir aplicaciones web",
            "Una estructura de datos para manejar solicitudes HTTP"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cómo se puede hacer una solicitud HTTP en JavaScript usando la API Fetch?",
        options: [
            "fetch('url')",
            "ajax('url')",
            "request('url')",
            "get('url')"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué hace el método .then() cuando se usa con Promesas?",
        options: [
            "Permite manejar la resolución exitosa de la promesa",
            "Permite manejar errores en una promesa",
            "Crea una nueva promesa que se resuelve inmediatamente",
            "Lanza un error si la promesa falla"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué significa 'JSON' cuando se usa en una solicitud a una API?",
        options: [
            "JavaScript Object Notation, un formato de datos usado para intercambiar información",
            "JavaScript Open Notation, un formato de datos específico de JavaScript",
            "Java Object Notation, un formato de datos usado en Java",
            "None of the above"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es la diferencia entre .then() y .catch() en las Promesas?",
        options: [
            ".then() maneja el éxito, .catch() maneja el error",
            ".then() maneja los errores, .catch() maneja el éxito",
            "Ambos manejan errores",
            "No hay diferencia"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Cuál de los siguientes métodos de la API Fetch permite obtener la respuesta de una solicitud?",
        options: [
            ".json()",
            ".parse()",
            ".resolve()",
            ".catch()"
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué retorna la API Fetch cuando se realiza una solicitud exitosa?",
        options: [
            "Un objeto Response",
            "Un objeto JSON",
            "Una promesa resuelta",
            "Un objeto XMLHttpRequest"
        ],
        correctAnswer: 0
    },
    // Puedes agregar más preguntas sobre promesas y APIs aquí
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("time-left").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showNextButton();
        }
    }, 1000);
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        answersDiv.appendChild(button);
    });

    timeLeft = 20;
    startTimer();
}

function checkAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const buttons = document.querySelectorAll("#answers button");

    // Colorear los botones
    if (selectedIndex === correctAnswer) {
        buttons[selectedIndex].style.backgroundColor = "green";
        score++;
    } else {
        buttons[selectedIndex].style.backgroundColor = "red";
        buttons[correctAnswer].style.backgroundColor = "green";
    }

    // Detener el temporizador
    clearInterval(timer);

    // Mostrar el botón de siguiente pregunta
    showNextButton();
}

function showNextButton() {
    document.getElementById("next-button").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("next-button").style.display = "none";
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("score-board").style.display = "block";
    document.getElementById("final-score").textContent = score;
}

// Iniciar el juego
loadQuestion();

