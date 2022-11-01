# Random-Password-Generator

## Table of Contents

* [Description](#description)
* [Code Examples](#code-examples)
* [Important links](#important-links)
* [Languages Used](#languages-used)
* [Questions](#questions)

## Description

The purpose of this project was to create a Random Password Generator that fit the following Criteria:

- Allows the user to select the number of characters for the password ( between 8 and 128)

- Allowsd the user to determine which type of characters makeup their password (Number, Special Characters, Uppercase Letters and Lowercase Letters)

- Generates the new poassword and displays on the screen for the user.

## Code Examples
Example of Code used to create prompt box messages:

```js
function generatePassword() {
// create variables for the messages that need to be produced in the prompt boxes of the generator.
    var input = prompt("How many characters should your Password Contain?")    
    var numbers = confirm ("Should your Password Contain Numbers? Click Ok  for Yes or Cancel for No.")
    var charactersSp = confirm ("Should your Password Contain Special Characters? Click Ok  for Yes or Cancel for No.")
    var lettersLower = confirm ("Should your Password Contain Lower Case Letters? Click Ok  for Yes or Cancel for No.")
    var lettersUpper = confirm ("Should your Password Contain Upper Case Letters? Click Ok  for Yes or Cancel for No.")
```

Example of Code used to create password length limitations:
```js
/ Create the if logic to create app functionality part 1: make it necessary to ender a password length and parameters on how short/long the password can be
    if (isNaN(passLength)) {
        alert("Not a Valid Character, Please Enter Numbers Only")
        return
    }
    
    if (passLength < 8 || passLength > 128) {
        alert("Pawword must be between 8 and 128 characters long")
        return
        console.log
```

## Important Links
[GitHub Repository](https://github.com/keekerr/Random-Password-Generator)

[Deployed Application](https://keekerr.github.io/Random-Password-Generator/)

![Image Example of Deployed Application](https://github.com/keekerr/Random-Password-Generator/blob/main/assets/Example%20of%20Random%20Password%20Generator.PNG?raw=true)

## Languages Used

![HTML Badge](https://th.bing.com/th/id/OIP._Ik4_2kbAUkc8WfirxFSLwHaHa?w=100&h=120&c=7&r=0&o=5&pid=1.7)
![CSS Badge](https://th.bing.com/th/id/OIP.bVCzXbidOak-TcOhmW0QTAHaHa?pid=ImgDet&w=100&h=120&c=7)
![JavaScript Badge]()
## Questions

If you have any questions regarding this project, please feel free to contact me at this email: keeley.s.sprouse@gmail.com

Other examples of projects I have worked on can be viewed on Github via this link: [keekerr](https://github.com/keekerr)