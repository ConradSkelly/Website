let correct = 0;

function startTest() {
    let questions = [
        { question: "What company developed JavaScript?", answer: "NETSCAPE" },
        { question: "Using JavaScript operator precedence, what is the result of the following expression? 2 + 4 * 6", answer: 26 },
        { question: "With what object-oriented programming language is JavaScript often compared and confused?", answer: "JAVA" }
    ];

    shuffleArray(questions);

    for (let i = 0; i < questions.length; i++) {
        askQuestion(questions[i].question, questions[i].answer);
    }

    console.log("You got " + correct + " right out of " + questions.length);
    correct = 0;
}

function askQuestion(question, answer) {
    let response = prompt(question, "");
    if (response) {
        correct += (response.toUpperCase() == answer.toString().toUpperCase()) ? 1 : 0;
        console.log("Current Score: " + correct);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}