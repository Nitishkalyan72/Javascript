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