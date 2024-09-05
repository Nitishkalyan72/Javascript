//THIS AND ARROW FUNCTION

//IMPORTANT QUES Interview - console.log(this) browser kae andr jo glabal object hai vo hai window object 
console.log(this)//and in the node environment it is empty object
//and this refers t current object 
//ase simple function kae andr hm this keyword ko access nhi kr skte kyuki uska koi context nhi hai yae sirf hmm object kae andr vale function mae access kr skte hai

const obj = {
    name: "Aatmraksha",
    regularFunc: function() {
        console.log(this.name); // 'this' refers to obj
    },
    arrowFunc: () => {
        console.log(this.name); // 'this' refers to the outer context, not obj
    }
};

obj.regularFunc(); // Logs "Aatmraksha"
obj.arrowFunc();   // Logs 'undefined' or refers to the global context, depending on where it's defined

//Ques - what is Lexical Scoping ?
/*Imp - In JavaScript, arrow functions don't have their own this. Instead, they automatically take this from the surrounding code where the arrow function is defined, called lexical scoping.
In regular functions, this changes based on how the function is called (runtime binding). But in arrow functions, this is fixed when the function is created and doesn’t change, even if it's called in different ways.*/


//Implicit return - it means ki isne khudse maan liya ki aapko return likne ki jrurt nhi hai kyuki single line statement hai
//const addTwoo = (num1,num2)=> num1+num2 //here we not need curly braces and return keyword but if we want to we can use parasynthesis also
//const addTwoo = (num1,num2)=> (num1+num2) // we will use this in react

//if we want to return object implicitly
const addTwoo = (num1,num2)=> ({username :"hitesh"}) //here also we can use parasynthesis
