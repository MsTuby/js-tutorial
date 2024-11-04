const account_id = 1324
let accountEmail = 'richa@google.com'
var accountPassword = "12345"
accountCity = "Hyderabad"
let accountState;

// account_id = 2 ;this is not allowed
//console.log(account_id);

accountEmail = 'hc@hc.com'
accountPassword = '65757'
accountCity = 'Delhi' // also, don't declare a variable like this
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
// printing values of multiple variables or constants
console.table([accountEmail, accountPassword, account_id, accountCity, accountState])
/* So, we must never use the keyword 'var' to declare a variable because of issue in block scope and functional scope*/
