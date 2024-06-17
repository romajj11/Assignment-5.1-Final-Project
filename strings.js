// J.J. Romano

// Function to check if the combined first and last name is a palindrome and validate the ZIP code
function checkPalindrome() {
    // Get the values from the first name, last name, and ZIP code input fields
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var zipCode = document.getElementById('zipCode').value;

    // Combine the first and last names with a space in between
    var fullName = firstName + ' ' + lastName;

    // Get the warning and secret divs to display any validation messages and secret message
    var warningDiv = document.getElementById('warning');
    var secretDiv = document.getElementById('secret');

    // Check if the combined name has more than 20 characters
    if (fullName.length > 20) {
        // Display a warning message if the combined name is too long
        warningDiv.textContent = 'The combined name has more than 20 characters. Please enter shorter names.';
        document.getElementById('result').textContent = ''; // Clear any previous result
        secretDiv.style.display = 'none'; // Hide the secret message
        return; // Exit the function without checking for palindrome
    }

    // Check if the ZIP code is valid (must be exactly 5 digits)
    var zipCodePattern = /^[0-9]{5}$/;
    if (!zipCodePattern.test(zipCode)) {
        // Display a warning message if the ZIP code is invalid
        warningDiv.textContent = 'The ZIP code must be exactly 5 digits.';
        document.getElementById('result').textContent = ''; // Clear any previous result
        secretDiv.style.display = 'none'; // Hide the secret message
        return; // Exit the function without checking for palindrome
    }

    // Clear any warning messages if the inputs are valid
    warningDiv.textContent = '';

    // Show the secret message if the ZIP code is valid
    secretDiv.style.display = 'block';

    // Remove non-alphanumeric characters from the full name and convert to lowercase
    var cleanedString = fullName.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Get the length of the cleaned string
    var length = cleanedString.length;

    // Initialize a flag to true, assuming the string is a palindrome
    var isPalindrome = true;

    // Loop through half of the string to check palindrome
    for (var i = 0; i < Math.floor(length / 2); i++) {
        // Compare characters from the start and end moving towards the center
        if (cleanedString[i] !== cleanedString[length - 1 - i]) {
            // If any character doesn't match, set the flag to false and break the loop
            isPalindrome = false;
            break;
        }
    }

    // Get the result div to display the outcome
    var resultDiv = document.getElementById('result');

    // Display the result based on the flag
    if (isPalindrome) {
        // If the flag is true, the combined name is a palindrome
        resultDiv.textContent = `"${fullName}" is a palindrome!`;
        resultDiv.style.color = 'green'; // Set text color to green
    } else {
        // If the flag is false, the combined name is not a palindrome
        resultDiv.textContent = `"${fullName}" is not a palindrome.`;
        resultDiv.style.color = 'red'; // Set text color to red
    }
}
