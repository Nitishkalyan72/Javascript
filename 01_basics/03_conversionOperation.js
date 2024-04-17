//==============================Data type conversion confusion clear krdega ==========================


// let score = "33" //after conversion in number .it will give correct output
// let score = "33aad"//after conversion in number will give NaN
// let score = null //after conversion into number will convert into zero
// let score = undefined //after conversion in number will give NaN
let score = true //after conversion will convert into 1 if false then it will convert into 0
console.log(typeof score)
let newScore = Number(score)
console.log(typeof newScore)
console.log(newScore)



// let isLoggedIn = 1
let isLoggedIn = "rk"
let check = Boolean(isLoggedIn)
console.log(check)

//1=>true
//0=>false
// rk(string mae koi b value hogi) => true
// "" => false


