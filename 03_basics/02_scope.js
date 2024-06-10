//flobal and locl scope
let a = 10
const b = 20
var c = 30
{
    let a = 11
    const b = 21
    var c = 31
}
console.log(a)//10 -c ka scope globally hota hai
console.log(b)//20
console.log(c)//31


//IMP - Browser kae anddr jake jb hm js run krte hai vha global scope alg hota hai or jb hmm node environment mae system mae run krte hai vha pae global scope alg hai
function one(){
    const userName = "ram";
    function two(){
        const website = "youtubbe"
        console.log(userName);
    }
    //console.log(website)//ReferenceError: website is not defined
    two();
}
one()

if(true){
    const userName = "hitesh"
    if(userName === "hitesh"){
        const website = " Youtube"
        console.log(userName+website)//hitesh Youtube
    }
}

//TWO SYNTESES TO DECLARE A FUNCTION 
//METHOD 1
function addone(num){
    return num+1
}
console.log(addone(5))

//addTwo(5)//ReferenceError: Cannot access 'addTwo' before initialization
//variables are very powerful in javascript 
//declare krne kae bad hmm isse hold b krrre hai 
//METHOD 2
const addTwo = function(num){
    return num+2
}
addTwo(5)
console.log(addTwo)


//THIS AND ARROW FUNCTION

//IMPORTANT QUES - console.log(this) browser kae andr jo glabal objevt hai vo hai window object 
console.log(this)//and in the node environment it is empty object
//and this refers t current object 
