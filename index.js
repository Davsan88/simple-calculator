// Retrieve the value entered in the input field as a string and convert this string to a floating-point number
const numberOne = parseFloat(document.getElementById('number1').value); 
const numberTwo = parseFloat(document.getElementById('number2').value);

function calculate(numberOne, numberTwo) {
    if (!isNaN(numberOne) && !isNaN(numberTwo)) {
        return alert("Please, introduce a valid number")
    }
}