let theNumber;

function init() {
    theNumber = Math.floor(Math.random() * 101) + 1;
    let button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    addValidationLinks();
}

function handleButtonClick() {
    console.log(theNumber)
    let numberInput = document.getElementById("guess");
    let guess = parseInt(numberInput.value);
    let ul = document.getElementById("guesses");
    let li = document.createElement("li");
    li.innerHTML = guess;
    ul.appendChild(li);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid guess between 1 and 100.");
    } else if (guess === theNumber) {
        alert("Congratulations! You guessed the number.");
        let playAgain = prompt("Do you want to play again? Enter 'yes' or 'no'");
        if (playAgain === "yes") {
            init(); 
        }
    } else if (guess < theNumber) {
        alert("The number is higher than " + guess);
    } else {
        alert("The number is lower than " + guess);
    }
}





function addValidationLinks() {
    var loc = window.location.href;
    var HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
    var CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' + loc + '?profile=css3';


    var htmlLink = document.createElement("a");
    htmlLink.setAttribute("href", HTMLvalidLinkStr);
    htmlLink.setAttribute("target", "_blank");
    htmlLink.textContent = "Validate HTML";


    var cssLink = document.createElement("a");
    cssLink.setAttribute("href", CSSvalidLinkStr);
    cssLink.setAttribute("target", "_blank");
    cssLink.textContent = "Validate CSS";


    document.body.appendChild(htmlLink);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(cssLink);
}

window.onload = init;
window.onload = validation;