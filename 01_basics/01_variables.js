const val = 1234
let accName = "ram"//Modern practice
var address = "delhi"
password = "9876" // can decaled but not a good practice
let accountstate;

//val = 1111 not allowed as because it declared constant 
accName = "sita"
address = "Ayodha"
password = "0001"
//prefer not to use var because of issue in block space and functional space(can be change the value outside the scope which is not a good practice)
console.table([val,accName,address,password,accountstate]);