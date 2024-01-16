var correct = 0;

function startTest() {
    var questions = [
        { question: "What company developed JavaScript?", answer: "NETSCAPE" },
        { question: "Using JavaScript operator precedence, what is the result of the following expression? 2 + 4 * 6", answer: 26 },
        { question: "With what object-oriented programming language is JavaScript often compared and confused?", answer: "JAVA" }
    ];

    shuffleArray(questions);

    for (var i = 0; i < questions.length; i++) {
        askQuestion(questions[i].question, questions[i].answer);
    }

    alert("You got " + correct + " right out of " + questions.length);
    correct = 0;
}

function askQuestion(question, answer) {
    var response = prompt(question, "");
    if (response) {
        correct += (response.toUpperCase() == answer.toString().toUpperCase()) ? 1 : 0;
        alert("Current Score: " + correct);
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}