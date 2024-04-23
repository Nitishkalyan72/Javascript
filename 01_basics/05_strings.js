let name = "ram"
let no = "99"
console.log(name+no)//but this is not a good method .Nowdays we use string interpolation
//String interpolation
console.log(`this is the ${name} and your count is ${no}`)//uses of bactics
//String store the data into key value pair
console.log(name[0])
const gameName = new String("jaiShriRam")

//========THESE ALL ARE FUNCTION OFSTRINGS WHICH ARE IN PROTOTYPE============================
/*
[[Prototype]]: String
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 
0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr
: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): 
ƒ [Symbol.iterator]()
*/

console.log(gameName.charAt(1))
console.log(gameName.bold())
console.log(gameName.indexOf('r'))
console.log(gameName.toUpperCase()) // AND the thing is their is not any change in the original value of string and the reson is same string is primitive data type and primitive are store in the stack memory
console.log(gameName.length)//length is not a function it is property of string and for arrays also it is a property not a function

const subStr = gameName.substring(0,3) //3 not included
console.log(subStr)
const sliceStr = gameName.slice(-8,4) 
console.log(sliceStr)


/*
Ques = is -ve values are allowed in both methods (substring and slice)?
Ans = No , they are only allowed in slice and when we are use -ve sign they count from end
*/

const Str = new String("                Ram              ")
let newStr = Str.trim() //remove white spaces   
console.log(newStr)

console.log(Str.replace('Ram','sita')) //replace the existing value

console.log(gameName.includes('Ram')) //True

console.log(gameName.split('a')) //it will return an array and split the string (jha b a hoga)