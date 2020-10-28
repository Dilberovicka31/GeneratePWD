// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Character set to choose the password from
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
function generatePassword() {
  //Gathering information from the user to define what the password will contain
var passwordLength = prompt ("Please choose a password length between 8 and 128 characters.");
// If password length is less than 8 or more than 128, send a message to redo
if ((passwordLength >8) && (passwordLength < 128))  {
  var passLength = parseInt(passwordLength)
  
// Gathering information from user regarding characters to use.
var specialCharReq = confirm('Do you want special characters?');
var numericReq = confirm ('Do you want numeric characters?');
var lowerCs = confirm (" Do you want your password to contain lower case letters?");
var upperCs = confirm ("Do you want you password to contain upper case letters?");
var newCharacters = "";
var passwordNew = "";
// If no selection was made prompt the user to choose at least one of the requirements for new password
if (!specialCharReq && !numericReq && !lowerCs && !upperCs ) {
  alert ("Please include at least one criteria for your password!")
}
//If the user chooses to use numeric characters is new password add it
if (numericReq ) {
  newCharacters += numbers;
}
//If the user chooses to use special characters is new password add it
if (specialCharReq ) {
  newCharacters += special;
}
//If the user chooses to use lower case characters is new password add it
if (lowerCs ) {
  newCharacters += lowercase;
}
//If the user chooses to use upper case characters is new password add it
if (upperCs ) {
  newCharacters += uppercase;
}
for (var i = 0; i < passLength; i++) {
  passwordNew += newCharacters[Math.floor(Math.random() * newCharacters.length)];
}
}else{
  alert("Password length is incorrect, please select a password between 8 and 128 characters.")
}
return passwordNew;
}
