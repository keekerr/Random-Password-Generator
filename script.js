
var numberList = ["0", "1", "2", "3", "4", "5", "6","7","8","9"]
var charactersSpList = ["!", "@", "#", "$", "%", "&", "*", "?"]
var lettersLowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var lettersUpperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// Randomization
function randomContent(array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    var randomElement = array[randomIndex]
    return randomElement
}

// // Retrieve Randomization
// function retrieveRandomItem(list){
//     return list[randomContent(list.length)]
// }

// create function that gets password options from the user.
function getOptions(){
    var length = prompt("How many characters should your Password Contain?")  
    if (Number.isNaN(length)) {
        alert("Not a Valid Character, Please Enter Numbers Only")
        return null
    }
    
    if (length < 8 || length > 128) {
        alert("Pawword must be between 8 and 128 characters long")
        return null
        
    }
      
    var hasNumbers = confirm ("Should your Password Contain Numbers? Click Ok  for Yes or Cancel for No.")
    var hasCharactersSp = confirm ("Should your Password Contain Special Characters? Click Ok  for Yes or Cancel for No.")
    var hasLettersLower = confirm ("Should your Password Contain Lower Case Letters? Click Ok  for Yes or Cancel for No.")
    var hasLettersUpper = confirm ("Should your Password Contain Upper Case Letters? Click Ok  for Yes or Cancel for No.")

   

    if (hasNumbers === false &&
        hasCharactersSp === false &&
        hasLettersLower === false &&
        hasLettersUpper === false) {
        alert("Must select at least one character type")
        return null
    }    

    var passwordOptions = {
        length: length,
        hasNumbers: hasNumbers,
        hasCharactersSp: hasCharactersSp,
        hasLettersLower: hasLettersLower,
        hasLettersUpper: hasLettersUpper,
    }

    return passwordOptions
}



// Create a function that feeds the password variable.
function generatePassword() {

// Create a vartiable to store the password options in
    var contentOptions = getOptions()
    var results = []
    var possibleCharacters = []
    var guaranteedCharacters = []

    if (!contentOptions) return null
    
    if (contentOptions.hasNumbers) {
        possibleCharacters = possibleCharacters.concat(numberList)
        guaranteedCharacters.push(randomContent(numberList))
    }
    if (contentOptions.hasCharactersSp) {
        possibleCharacters = possibleCharacters.concat(charactersSpList)
        guaranteedCharacters.push(randomContent(charactersSpList))
    }
    if (contentOptions.hasLettersLower) {
        possibleCharacters = possibleCharacters.concat(lettersLowerList)
        guaranteedCharacters.push(randomContent(lettersLowerList))
    }
    if (contentOptions.hasLettersUpper) {
        possibleCharacters = possibleCharacters.concat(lettersUpperList)
        guaranteedCharacters.push(randomContent(lettersUpperList))
    }

    for (var i = 0; i < contentOptions.length; i++) {
        var possibleCharacter = randomContent(possibleCharacters)
        results.push(possibleCharacter)
    }

    for (var i = 0; i<guaranteedCharacters.length; i++) {
        results[i] = guaranteedCharacters[i]
    }

    return results.join("")
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

