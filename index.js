function calculate(operation) {
    // Retrieve the value entered in the input field as a string and convert this string to a floating-point number
    const numberOne = parseFloat(document.getElementById('number1').value);
    const numberTwo = parseFloat(document.getElementById('number2').value);

    // Step 1: Validate the inputs
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        return alert("Please enter valid numbers."); // Alert if inputs are not valid numbers
    }

    let result; // Declare a variable to store the result

    // Step 2: Use a switch statement to determine the operation
    switch (operation) {
        case 'add': // Case for addition
            result = `${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`;
            break;
        case 'subtract': // Case for subtraction
            result = `${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`;
            break;
        case 'multiply': // Case for multiplication
            result = `${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`;
            break;
        case 'divide': // Case for division
            if (numberTwo === 0) {
                result = "Division by zero is not allowed."; // Handle division by zero
            } else {
                result = `${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`;
            }
            break;
        default: // Default case for invalid operations
            result = "Invalid operation.";
    }

    document.getElementById('result').innerText = result; // Return the result
}
