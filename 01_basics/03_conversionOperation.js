//==============================Data type conversion confusion clear krdega ==========================


// let score = "33" //after conversion in number .it will give correct output 33 => 33
// let score = "33aad"//after conversion in number will give NaN (33aad => NaN)
// let score = null //after conversion into number will convert into zero (null => 0)
// let score = undefined //after conversion in number will give NaN (undefined  => NaN)
let score = true //after conversion will convert into 1 if false then it will convert into 0 (true => 1)
console.log(typeof score)
let newScore = Number(score)
console.log(typeof newScore)
console.log(newScore)//1



// let isLoggedIn = 1
let isLoggedIn = "rk"
let check = Boolean(isLoggedIn)
console.log(check)//true
//1=>true
//0=>false
// rk(string mae koi b value hogi) => true
// "" => false






//========================OPERATIONS===========================

let val = 3
let newVal = -val
console.log(newVal) // -3



console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) // 2 ki power 3
console.log(2/2)
console.log(5%2)  //1


console.log("2"+"2") // 22
console.log("2"+2+2) // 222
console.log(2+2+"2") // 42


//=============prefix vs postfix====================
let x = 3
let y = x++
console.log(x +" , " + y)//4,3

let a = 3
let b = ++a
console.log(a +" , "+ b)//4,4



