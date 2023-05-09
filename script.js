let questions = [{
        "question": "Was ist der längste Fluss der Welt?",
        "answer_1": "Der Amazonas",
        "answer_2": "Der Nil",
        "answer_3": "Der Rhein",
        "answer_4": "Der Niger",
        "right_answer": 2,
    },
    {
        "question": "frage2",
        "answer_1": "Der Amazonas",
        "answer_2": "Der Nil",
        "answer_3": "Der Rhein",
        "answer_4": "Der Niger",
        "right_answer": 2,
    },
    {
        "question": "frage3",
        "answer_1": "Der Amazonas",
        "answer_2": "Der Nil",
        "answer_3": "Der Rhein",
        "answer_4": "Der Niger",
        "right_answer": 2,
    },
    {
        "question": "frage4",
        "answer_1": "Der Amazonas",
        "answer_2": "Der Nil",
        "answer_3": "Der Rhein",
        "answer_4": "Der Niger",
        "right_answer": 2,
    }
];

let rightQuestions = 0;
let currentQuestion = 0;
let audioSucces = new Audio('sound/right.mp3');
let audioFail = new Audio('sound/wrong.mp3');
let audioIntro = new Audio('sound/intro.mp3')

function init() {
    audioIntro.play();

    document.getElementById('allquest').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();

    } else {
        updatePrognessBar();
        updateToNextquestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;

}


function answer(selection) {
    let question = questions[currentQuestion];

    let selectedQuestionNumber = selection.slice(-1);


    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audioSucces.play();
        rightQuestions++;

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audioFail.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton()
    showQuestion();



}


function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');

}


function restartGame() {
    document.getElementById('header-image').src = 'img/quiz header.jpg';
    rightQuestions = 0;
    currentQuestion = 0;
    init()

    document.getElementById('questionBody').style = ''; //wieder anzeigen
    document.getElementById('endScreen').style = 'display:none'; //end screen ausblenden
    document.getElementById('footer').style = ''; //wieder anzeigen


}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display:none';
    document.getElementById('footer').style = 'display:none';



    document.getElementById('amount-Of-Questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/brain result.png';

}



function updatePrognessBar() {

    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;

}


function updateToNextquestion() {


    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}