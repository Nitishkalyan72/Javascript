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



// Rest Operator 
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500))//[ 200, 400, 500 ]//because it will take all elements 

const user ={
    userName :"Ram",
    prices : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)//Username is Ram and price is undefined(thats why we need to check is anyObject.username is came or not from parameters)

}
handleObject(user)

//paasing array in function
const myNewArray = [200,400,453,432]
function newFun(getArr){
    return getArr
}
const val = newFun(myNewArray)
console.log(val)