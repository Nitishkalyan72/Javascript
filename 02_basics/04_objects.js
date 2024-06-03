const obj = {};//Non singelton object
const obj_ = new Object();//singelton object 
console.log(obj);
console.log(obj_);

const instaUser = {
    userName :{
        fullname :{
            firstName : "Ram",
            lastname :"chaudhary"
        }
    }
}
console.log(instaUser.userName.fullname.firstName);//thats how we can access nesting ob objects
//optional Chaining
console.log(instaUser.userName.fullname?.firstName);//agr full name exists e nhi karega toh(yae hum apis sae response aata hai tb use krte hai)

//if we want to combine different object we can do them like this or we can also use spread operator 
const obj1 = { 1 : "a",2 : "b"}
const obj2 = { 3 : "c",4 : "d"}
const obj3 = { 5 : "a",6 : "b"}

//const finalObj = Object.assign({},obj1,obj2,obj3)//we make {} as because we used it as a taget object all object will stored in this
//console.log(finalObj)
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4)



//sometimes in Apis we haive Array of Objects
const tinderUser =[
    {
        id : "1",
        name :"ritik"
    },
    {
        id : "2",
        name :"ritvik"
    },
    {
        id:"3",
        name : "ram"
    }
]

console.log(tinderUser[0].name)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

//object destructring : we will use destructuring in react also props ki jangah pae destructure krke objex=ct dal dete hai 
const course = {
    coursename:"java",
    price:"5000",
    courseInstructor:"hitesh"
}

const {courseInstructor :ci} = course;
console.log(ci)

//APIS cocept(Apis mae values aati hai json ki form hai)

/*
{
    "name":"hitesh",
    "course":"chai with code",
    "price":"key"
}
*/

//Kai barri array of objects b aate hai
/*[
    {
        "name":"hitesh",
        "course":"chai with code",
        "price":"key"
    },
    {
        "name":"hitesh",
        "course":"chai with code",
        "price":"key"
    }
]*/


