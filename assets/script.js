// Variable Declarations
var charUpper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var charLower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var charNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charSpec = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];


// Determining the length they want the password to be
function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you like your password to be?"));  
  if (passwordLength <= 7 || passwordLength >= 129) {
    alert("Your password length must be between 8 and 128 characters. Please choose again.");
    return null;
  }
  // Confirming types of characters in their password
  var hasLower = confirm("Would you like Lowercase characters in your password?");
  var hasUpper = confirm("Would you like Uppercase characters in your password?");
  var hasNum = confirm("Would you like numbers in your password?");
  var hasSpecial = confirm("Would you like Special characters in your password?");

  if(hasLower === false && hasUpper === false && hasNum === false && hasSpecial === false){
    alert("You must select at least one character option. Try again!")
    return null;
  }


  var possiblePass = [];
  var randomPass = [];

  // Generating lowercase 
  if(hasLower === true) {
    for (let i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * charLower.length);
      var randomChar = charLower[randomIndex];

      possiblePass.push(randomChar);
    }
  }
  // Generating Uppercase 
  if(hasUpper === true) {
    for (let i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * charUpper.length);
      var randomChar = charUpper[randomIndex];

      possiblePass.push(randomChar);
    }
  }

  // Generates Numbers 
  if(hasNum === true) {
    for (let i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * charNum.length);
      var randomChar = charNum[randomIndex];

      possiblePass.push(randomChar);
    }
  }

  // Generates special characters
  if(hasSpecial === true) {
    for (let i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * charSpec.length);
      var randomChar = charSpec[randomIndex];

      // Gives possible characters for password
      possiblePass.push(randomChar);
    }
  }

  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possiblePass.length);
    var randomChar = possiblePass[randomIndex];

    randomPass.push(randomChar);
  }

  console.log(possiblePass);

  return randomPass.join('');

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
