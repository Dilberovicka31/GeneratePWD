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
var numericPs = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["!","\\","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","\""];

var passwordNew = [];


console.log(lowerCase,upperCase,numericPs,specialChar);


function generatePassword() {

  //Gathering information from the user to define what the password will contain
//Declaring a new password 
var passwordLength = prompt ("Please choose a password length between 8 and 128 characters.");

// If password length is less than 8 or more than 128, send a message to redo
if (!(passwordLength >=8 && passwordLength <= 128) ) {
  alert ("Password length is incorrect, please select a password between 8 and 128 characters.")
  return;
  
}

var specialCharReq = confirm('Do you want special characters?');
var numericReq = confirm ('Do you want numeric characters?');
var lowerCs = confirm (" Do you want your password to contain lower case letters?");
var upperCs = confirm ("Do you want you password to contain upper case letters?");



if (!specialChar && !numericPs && !lowerCase && !upperCase) {
  alert ("Please include at least one criteria for your password!")
  return;
}

if (numericReq === true) {
  numericReq.concat(numericPs)
}








  
  

  

  
    // Declare a new "password' string "

  //If using lowercase characters then push the characters into chartoUse then push lowercase char in allChar list and append on random lowercase letter from the list 
  

  //If using uppercase characters then push the characters into chartoUse

  //If using special characters then push the characters into chartoUse

  //If using number characters then push the characters into chartoUse



  //contine as long as i is less than <passwordlength; i++

  //See if theCondition if char to use length === 0 then alert message to user to pick at least one option and exit function 
  


  }
//Select randomCharacter a character from ' select characters to use from allChar
//Append randomCharacter to password sting

//Return 'password' value



//variable declaration 


  

  