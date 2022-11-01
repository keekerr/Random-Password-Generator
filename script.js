// Assignment Code
var generateBtn = document.querySelector("#generate");

// Randomization
function randomContent(min, max) {
    if (!max) {
        max = min
        min = 0
    }
    var random = Math.random()
    return Math.floor(min*(1 - random) + random*max)
}

// Retrieve Randomization
function retrieveRandomItem(list){
    return list[randomContent(list.length)]
}


// Crewate a function that feeds the password variable.
function generatePassword() {
// create variables for the messages that need to be produced in the prompt boxes of the generator.
    var input = prompt("How many characters should your Password Contain?")    
    var numbers = confirm ("Should your Password Contain Numbers? Click Ok  for Yes or Cancel for No.")
    var charactersSp = confirm ("Should your Password Contain Special Characters? Click Ok  for Yes or Cancel for No.")
    var lettersLower = confirm ("Should your Password Contain Lower Case Letters? Click Ok  for Yes or Cancel for No.")
    var lettersUpper = confirm ("Should your Password Contain Upper Case Letters? Click Ok  for Yes or Cancel for No.")

    var passLength = parseInt(input)

// input the content for the variables .
    var numberList = ["0", "1", "2", "3", "4", "5", "6","7","8","9"]
    var charactersSpList = ["!", "@", "#", "$", "%", "&", "*", "?"]
    var lettersLowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var lettersUpperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Create a vartiable to store the password options in
    var contentOptions = []

// Create the if logic to create app functionality part 1: make it necessary to ender a password length and parameters on how short/long the password can be
    if (isNaN(passLength)) {
        alert("Not a Valid Character, Please Enter Numbers Only")
        return
    }
    
    if (passLength < 8 || passLength > 128) {
        alert("Pawword must be between 8 and 128 characters long")
        return
        console.log
    }

// Create if logic to create content logic/how the generator randomly compiles content for a password. create an if statement for all content variables creates above.
    if (numbers === true) {
        contentOptions.push(numberList)
    }

    if (charactersSp === true) {
        contentOptions.push(charactersSpList)
    }

    if (lettersLower === true) {
        contentOptions.push(lettersLowerList)
    }

    if (lettersUpper === true) {
        contentOptions.push(lettersUpperList)
    }
    console.log(contentOptions)

    return generatedPassword = ""

    for (var i = 0; i < passLength; i++) {
        var randomContentList = retrieveRandomItem(contentOptions)
        var randomCharacters = retrieveRandomItem(randomizedList);

        return generatedPassword
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

