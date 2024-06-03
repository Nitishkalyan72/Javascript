//1. singelton  or with help of constructor
//object.create 

//2. object literls

/*
ImpQues - take a symbol and add it to object and then print it ?
*/
const mySym = Symbol("key1")

const jsUser = {
    name : "ram",
    //mySym: "myKey1"// Yae hmara symbol ki tarah use nhi hoga iska type of => string aaega
    [mySym]: "myKey1",
    city : "Ayodha",
    age : "20",
    email : "ram@gmail.com",
    isloggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]

}

//object ko access karne kae 2 tarike hai
console.log(jsUser.age)
console.log(jsUser["age"])
console.log(typeof jsUser.mySym)
console.log(jsUser[mySym])

jsUser.email = "sita@gmail.com"
console.log(jsUser.email)
//now if i want to frreze the object such that noone can do changes in it
// Object.freeze(jsUser)
jsUser.email = "Ram@gmail.com"
console.log(jsUser.email)//sita@gmail.com
console.log(jsUser)

//functions are treated like a variable in js (:

jsUser.greeting = function(){
    console.log(`hello Users`)
}
jsUser.greeting1 = function(){
    console.log(`hello Users ${this.name}`)//this refer to the current object with which we are working
}
console.log(jsUser.greeting())//undefined (aage btaenge)
jsUser.greeting()
jsUser.greeting1()

