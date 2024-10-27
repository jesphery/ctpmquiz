const questions = [
    {
        question: "De acordo com as informações das armas, quais são as armas desenvolvidas pelo Heckler & Koch?",
        answers: [
            { text: "A - MP5KA4 - MP5A5 - MP5SD6 - PSG1", correct: true},
            { text: "B - MP5KA4 - Carabina IMBEL IA2 - PSG1", correct: false},
            { text: "C - SMT9 - MP5A5 - 12 Military", correct: false},
            { text: "D - PSG1 - SMT9", correct: false},
        ]
}, 
    {

        question: "Qual é a arma de fogo desenvolvida no Brasil, conhecida por sua confiabilidade e precisão?",
        answers: [
            { text: "A - SMT9", correct: false},
            { text: "B - Fuzil MD2A1", correct: true},
            { text: "C - PSG1", correct: false},
            { text: "D - Carabina IMBEL IA2", correct: false},
        ]

},  
   {

    question: "A 12 Military é um(a):",
    answers: [
        { text: "A - Fuzil", correct: false},
        { text: "B - Carabina", correct: false},
        { text: "C - Pistola", correct: false},
        { text: "D - Espingarda", correct: true},
    ]
}, 
    {

    question: "Qual é o tipo de munição utilizado pela submetralhadora MP5KA4?",
    answers: [
        { text: "A - 7.62x51mm NATO", correct: false},
        { text: "B - 5.56x45mm NATO", correct: false},
        { text: "C - 9x19mm Parabellum", correct: true},
        { text: "D - .45 ACP", correct: false},
    ]
}, 
    {

    question: "Para quais situações a 12 Military é indicada?",
    answers: [
        { text: "A - Uso em competições de tiro", correct: false},
        { text: "B - Operações táticas e combate próximo.", correct: true},
        { text: "C - Caça de pequeno porte.", correct: false},
        { text: "D - Defesa pessoal em áreas urbanas.", correct: false},
    ]
},

    {

    question: "De acordo com as informações, qual é a arma utilizada pela forças armadas brasileiras?",
    answers: [
        { text: "A - 12 Military", correct: false},
        { text: "B - Mauser 1908", correct: true},
        { text: "C - Taurus PT 938", correct: false},
        { text: "D - SMT9", correct: false},
    ]
},

    {

    question: "Qual é o calibre da Carabina IMBEL IA2?",
    answers: [
        { text: "A - 5,56", correct: false},
        { text: "B - 7,62", correct: true},
        { text: "C - 9mm", correct: false},
        { text: "D - 12,7", correct: false},
    ]
},

    {

    question: "Para que tipo de operações a PSG1 é frequentemente utilizada?",
    answers: [
        { text: "A - Operações médicas", correct: false},
        { text: "B - Operações aquáticas", correct: false},
        { text: "C - Operações de resgate", correct: false},
        { text: "D - Operações militares", correct: true},
    ]
},

    {

    question: "Qual característica da coronha da Carabina IMBEL IA2 facilita a portabilidade?",
    answers: [
        { text: "A - É feita de metal", correct: false},
        { text: "B - É mais longa", correct: false},
        { text: "C - É rebatível e feita de polímero", correct: true},
        { text: "D - Tem ajuste de altura", correct: false},
    ]
},

    {

    question: "Qual é a submetralhadora desenvolvida pela Taurus?",
    answers: [
        { text: "A - SMT9", correct: true},
        { text: "B - MPS5KA4", correct: false},
        { text: "C - PSG1", correct: false},
        { text: "D - 12 Military", correct: false},
    ]
}
   


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima Pergunta";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";
}


startQuiz();
    

