// global variables
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var passwordOption = [];
var passwordText = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getPassword() {
  var charLength = prompt("Choose length of password between 8-128 characters");

  // password length with prompt to get user to choose correct length

  while (charLength < 8 || charLength > 128 || isNaN(charLength)) {
    alert("please enter a number between 8-128 characters");
    return getPassword();
  }

  // password character options
  do {
    var confirmNumber = confirm("Click OK for Numbers");
    var confirmSpecial = confirm("Click OK for Special Characters");
    var confirmLower = confirm("Click OK for Lower Case Letters");
    var confirmUpper = confirm("Click OK for Upper Case Letters");

    //while loop to force option selection
    if (
      confirmNumber === false &&
      confirmSpecial === false &&
      confirmLower === false &&
      confirmUpper === false
    ) {
      alert("One option required");
    }
  } while (
    confirmNumber === false &&
    confirmSpecial === false &&
    confirmLower === false &&
    confirmUpper === false
  );

  // if conditionals to build array based on user input
  if (confirmNumber) {
    passwordOption = passwordOption.concat(number);
  }

  if (confirmSpecial) {
    passwordOption = passwordOption.concat(special);
  }

  if (confirmLower) {
    passwordOption = passwordOption.concat(lower);
  }

  if (confirmUpper) {
    passwordOption = passwordOption.concat(upper);
  }

  //  for loop to generate password from pool of user selected characters
  var randomPassword = "";
  for (var i = 0; i < charLength; i++) {
    randomPassword =
      randomPassword +
      passwordOption[Math.floor(Math.random() * passwordOption.length)];
  }
  return randomPassword;
}

// write password to text box
function writePassword() {
  var password = getPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
