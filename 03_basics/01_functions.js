function addTwoNumbers(number1,number2){
    return number1+number2;
}

const result = addTwoNumbers(3,7)
console.log(result)

function userLogin(username){
    if(!username){
        console.log("please enter a username")
        return;
    }
    return `${username} user just logged in`;
}
console.log(userLogin("ram"))
