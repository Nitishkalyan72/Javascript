// ===================PRIMITIVE  (call by value honge hmesa )jb hm kisi ek sae dusri jhangha copy karte hai toh inka original refrence nhi diya jata hai . yae data copy karke alg diya jata hai(means jo b change hote hai vo copy mae hote hai )=================

/*
1.String
2.Number
3.BigInt.    => const num =  3987498198179871n    (baad mae n lgana pdta hai vo isko khudse Bigint ki tarah store krega)
4.Boolean
5.null 
6.undefined 
7.Symbol
*/


/*
Ques = Is javascript is dynamically type language ?
ANS = Yes, JavaScript is often described as a dynamically typed language. This means that variables in JavaScript can hold values of any data type, and the data type of a variable can change dynamically during the execution of a program.
let num = 73
*/


/*
Ques = null vs undefined
ANS =  null > is used when you want to explicitly represent the absence of a value.
       undefined > hmne declare krdi but abi intialized nhi kri. || (let myVar; // undefined (implicitly)
*/


/*
symbols => uniquely identification kae liye use krte hai 
const id = Symbol("123")
const id2 = Symbol("123")
console.log(id===id2); // => False
*/

 
//===============Reference (NON-PRIMITIVE)====================
/*
1.Array
2.Object
3.function
*/


/*
let heroes  = ["Ram","sita","Laxman"]
console.log(typeof heroes) //object
let myObj = {
    name : "Krishna",
    age : 22
}
console.log(typeof myObj) // object 
let myFunction = function(){
    console.log("Yae ek functionn hai")
}
console.log(typeof myFunction) //typeOF  "function" dikaega pr isko b "function object" e bola jata hai => (MEANS SBI NON-PRIMITIVE DATA TYPE OBJECT E RETURN KRTE HAI )
*/



/*
IMPORTANT QUES (typeof different datatypes)
Type	Result
Undefined	"undefined"
Null	"object"       => (Important ques for Interview)
Boolean	"boolean"
Number	"number"
BigInt	"bigint"
String	"string"
Symbol	"symbol"
Function "function" (FUNCTION OBJECT)
Any other object	"object"
*/


/*
Ques = WHY TYPE OF NULL IS OBJECT IN JAVASCRIPT
Ans = When JavaScript was first developed, its internal implementation represented values using a tagging system. Each value had a tag that indicated its type. The tag for objects was 000, and the tag for null values was also 000. This meant that when typeof checked the type of null, it saw the same tag as an object, leading to the result 'object'.
*/



//================================ STACK MEMORY (Primitives Datatypes uses) vs HEAP MEMORY (NON - PRIMITIVES uses Heap)==================================================
let name1 = "laxman"
let newName = name1
newName = "ram"
console.log(name1) // laxman
console.log(newName) //ram => it means that original value mae koi change nhi hai



let obj = {
    name1 : "ram",
    id : "ram@gmail"
}
let obj2 = obj
obj2.name1 = "sita"
console.log(obj.name1) // sita
console.log(obj2.name1) //sita => it means their is changes in original value means refernce is pass when we create NON-PRIMITIVE data type (vo hmesa refrence pass krenge)

