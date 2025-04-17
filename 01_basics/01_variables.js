const accountId = 122333
let accountEmail = "abc@example.com"
var accountPassword = "12345"
accountCity = 'Lahore'

// accountId = 2 // not allowed
accountEmail = "aaa@bbb.com"
accountPassword = "112233"
accountCity = "Islamabad"
let accountState;

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
