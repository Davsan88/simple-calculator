// Retrieve the value entered in the input field as a string and convert this string to a floating-point number
const numberOne = parseFloat(document.getElementById('number1').value); 
const numberTwo = parseFloat(document.getElementById('number2').value);

function calculate(numberOne, numberTwo, operation) {
    if (!isNaN(numberOne) && !isNaN(numberTwo)) {
        return alert("Please enter valid number");
    } 
    
    let = result;
    switch (operation) {
        case 'add':
            result = `${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`;
            break;
        case 'substract':
            result = `${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`;
            break;
        case 'multiply':
            result = `${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`;
            break;
        case 'divide':
            if (numberTwo === 0) {
                result = "Division by zero is not allowed.";
            result = `${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`;
            break;
        default:
            result = "Invalid operation.";
    }

    return result;
}