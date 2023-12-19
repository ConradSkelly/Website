window.onload = init;
function init() {
    let button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    let number = Math.floor(Math.random() * 101) + 1;
    let guess = document.getElementById("guess")
    console.log(number," ", guess)

}