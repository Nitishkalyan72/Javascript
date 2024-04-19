const balance = new Number(100)
console.log(balance) // here we can if we define a number by creating object then while printing it gives "[Number: 100]"
console.log(balance.toString().length) //3
console.log(balance.toFixed(3))// 100.000
const num = 255.345
console.log(num.toPrecision(4)) //255.3

const number = 1000000
console.log(number.toLocaleString())//convert in US standard
console.log(number.toLocaleString('en-IN'))//convert in indian standard


//++++++++++++++++++++. MATH library came in javascript by default++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4)) //4
console.log(Math.round(4.6)) //5
console.log(Math.ceil(5.4)) //6
console.log(Math.floor(7.9)) //7
console.log(Math.min(4,2,4,9,1)) //1
console.log(Math.max(4,2,4,9,1)) //9

console.log(Math.random()) //generate values between 0 and 1 (Ex - 0.369492)
console.log(Math.random()*10) //it will shift 1 digit (Ex - 3.69492)
console.log((Math.random()*10)+1) // it will handle the case (Ex - 0.06974298237331165) where after decimal their is 1 more zero

//If the range is given
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min +1))+min)