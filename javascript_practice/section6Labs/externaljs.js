function startConversation() {
    function addNumbers(arg1, arg2) {
        let result = arg1 + arg2;
        return result;
    }



    let num1 = prompt("Please enter a numerical value for the first number:", "");
    let parsedNum1 = parseFloat(num1);

    if (!isNaN(parsedNum1)) {
        console.log("You entered: " + parsedNum1);


        let num2 = prompt("Now, please enter a numerical value for the second number:", "");
        let parsedNum2 = parseFloat(num2);

        if (!isNaN(parsedNum2)) {
            console.log("You entered: " + parsedNum2);


            let result = addNumbers(parsedNum1, parsedNum2);


            console.log("The result of adding " + parsedNum1 + " and " + parsedNum2 + " is: " + result);
            document.write("<p>The result of the addNumbers() function is: <strong>" + result + "</strong></p>");
        } else {
            console.log("Invalid input for the second number. Please enter a numerical value.");
        }
    } else {
        console.log("Invalid input for the first number. Please enter a numerical value.");
    }
}