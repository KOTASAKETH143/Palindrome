function checkPalindrome() {
    const inputString = document.getElementById("inputString").value.trim(); // Get and trim input

    // Check if the input string is empty
    if (inputString === "") {
        document.getElementById("result").innerText = "Please enter a series of numbers.";
        return; // Exit the function if input is empty
    }

    // Check if the input contains only numbers
    const regex = /^\d+$/; // Regular expression to check for numbers only
    if (!regex.test(inputString)) {
        document.getElementById("result").innerText = "Please enter numbers only.";
        return; // Exit the function if input is invalid
    }

    // Reverse the string without using built-in functions
    const reversedString = reverseString(inputString);

    // Check if the original string is a palindrome
    const isPalindrome = inputString === reversedString;

    // Display result with a message for each submission
    const resultElement = document.getElementById("result");
    if (isPalindrome) {
        resultElement.innerText = `"${inputString}" is a palindrome.`;
    } else {
        resultElement.innerText = `"${inputString}" is not a palindrome.`;
    }
}

// Function to reverse a string without using built-in functions
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
