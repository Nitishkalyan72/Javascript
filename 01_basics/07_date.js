let myDate = new Date() //created an instance of Date
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

/*
Question - what is the type of date in js?
ans - Object
*/

console.log(typeof myDate)
let myCreatedDate = new Date(2001,4,27)//Month start from 0 in javascript
console.log(myCreatedDate.toDateString())
let myCreatedDate2 = new Date(2001,4,27,5,7)
console.log(myCreatedDate2.toLocaleTimeString())


let myTimeStamp = Date.now();
console.log(myTimeStamp) //01/1970 - sae abtk ek milisecond ki value aaegi
//jb b hmm koi bda project bnaege jisme hme cpmaperison krna hoga toh hmm milliseconds ki value mae e krenge 
console.log(Date.now()/1000) // this will convert milliseconds into seconds
console.log(Math.floor(Date.now()/1000))

