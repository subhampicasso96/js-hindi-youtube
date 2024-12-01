const accountID = 12345
let accountemail = "shubham@google.com"
var accountpassword = 98299
accountcity = "varanasi"

// accountID = 02 // not allowed

accountemail = "Shrivatava@yahoo.com"
accountpassword = 12345
accountcity = "Noida"

/*
 Prefer not to var
 Becauase of issue in block scope and functional scope
*/

console.log(accountpassword);
console.table([accountID, accountemail, accountpassword, accountcity])
