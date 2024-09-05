const marvel_heros = ["thor","ironman","spiderman"]
const marvel_heros2 = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] //changes in existing array
//console.log(marvel_heros[3][2]) //batman

let arr = marvel_heros2.concat(dc_heros) //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(arr)

//spread operator
let allHeros = [...marvel_heros,...dc_heros]
console.log(allHeros)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//array kae and arraya kae and array
let newarr = [2,5,1,6,[5,7,4,[9,7,6,4]]]
let newarr2 = newarr.flat(Infinity)// infinity depth tk check krega like yha pae 3 hai
console.log(newarr2)

//conversion krna array mae agr array nhib hai
const a1 = "ram"
const a2 = "sita"
console.log(Array.isArray("hunk"))//false
console.log(Array.from("hunk")) //['h','u','n','k']
console.log(Array.from({name : "hunk"}))// [] kyuki yae direct object ko nhi lega hme define krna pdega ki hme array keys ka bnana hai ya values ka
console.log(Array.of(a1,a2)) //['ram','sita']