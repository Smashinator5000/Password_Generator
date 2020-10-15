var generateBtn = document.querySelector("#generate");


    function randomFuncs(array) {
        var randomIndex = Math.floor(Math.random() * array.length);
        var randomPass = array[randomIndex];
    
        return randomPass;  
    };

      var getRandomUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var getRandomLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];    
      var getRandomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
      var getRandomSymbols  = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(','}','{',']','[','~','-','_','.'];

      
    function passwordOptions() {
      var confirmUpperCase = confirm("Would you like to use uppercase letters?");
      var confirmLowerCase = confirm("Would you like to use lowercase letters?");
      var confirmNumbers = confirm("Would you like to use numbers?");
      var confirmSymbols = confirm("Would you like to use symbols?");
   
      var passwordLength = prompt("Enter desired password length. Min. 8 Max. 128.")  

    console.log(confirmUpperCase);
    console.log(confirmLowerCase);
    console.log(confirmNumbers);
    console.log(confirmSymbols);
    console.log(passwordLength);
    
  
    var randomFunctions = {
      confirmUpperCase: confirmUpperCase,
      confirmLowerCase: confirmLowerCase,
      confirmNumbers: confirmNumbers,
      confirmSymbols: confirmSymbols,
      passwordLength: passwordLength
     };
    
      return randomFunctions;
    };
    
    function createPassword() {
      var randomOptions = passwordOptions();
      var randomPassword = [];
      var randomCharacters = [];
      var chosenRandomPasswords = []; 
    
      console.log(randomOptions) 
      console.log(randomPassword);
      console.log(randomCharacters)
      console.log(chosenRandomPasswords)


    if (randomOptions.confirmUpperCase === true) {
      randomCharacters=randomCharacters.concat(getRandomUpper)
        chosenRandomPasswords.push(randomFuncs(getRandomUpper));
        };  

    if (randomOptions.confirmLowerCase === true) {
      randomCharacters=randomCharacters.concat(getRandomLower)
       chosenRandomPasswords.push(randomFuncs(getRandomLower));
     };

    if (randomOptions.confirmNumbers === true) {
      randomCharacters=randomCharacters.concat(getRandomNumbers)
        chosenRandomPasswords.push(randomFuncs(getRandomNumbers));   
      };
      
     
    if (randomOptions.confirmSymbols === true) {
      randomCharacters=randomCharacters.concat(getRandomSymbols)
     chosenRandomPasswords.push(randomFuncs(getRandomSymbols));
    };

    
    
    for (var i = 0; i < randomOptions.passwordLength; i++) {
       var randomCharacters = randomFuncs(chosenRandomPasswords)
       randomPassword.push(randomCharacters)
    };
    
    for (var i = 0; i < chosenRandomPasswords.length; i++) {
      randomPassword[i] = randomFuncs(chosenRandomPasswords)
        };  

    return randomPassword.join('')
   };

    function writePassword() {
        var password = createPassword();
        var passwordText = document.querySelector("#password");
    
        passwordText.value = password;
    };


   generateBtn.addEventListener("click", writePassword); 

