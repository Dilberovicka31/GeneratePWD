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
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericPs = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","\\","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\""];
var allChar = "";

console.log(lowerCase,upperCase,numericPs,specialChar);


//Gathering information from the user to define what the password will contain
var lengthReq = prompt("How many characters will your password be? Enter a number between 8 and 128");
var specialCharReq = confirm('Do you want special characters?');
var numericReq = confirm ('Do you want numeric characters?');
var lowerCs = confirm (" Do you want your password to contain lower case letters?");
var upperCs = confirm ("Do you want you password to contain upper case letters?");


console.log(lengthReq,specialCharReq,numericReq,lowerCs,upperCs);

function generatePassword() {





}

  //If using lowercase characters then push the characters into chartoUse

  //If using uppercase characters then push the characters into chartoUse

  //If using special characters then push the characters into chartoUse

  //If using number characters then push the characters into chartoUse

  // 


  while(password.length < passwordLength) {}
