let arr = [2,6,4,8,7,"ram",true]
console.log(arr[5])

const arr2 = new Array(4,2,5,1,3)

// JavaScript arrays are resizable and can contain a mix of different data types. 
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// A shallow copy of an object is a copy whose properties share the same references(yani ki original array mae e changes honge)

//====================== ARRAYS METHODS ======================
console.log(arr2.includes(3)) // true
arr2.push(4);
console.log(arr2)
arr2.pop();
console.log(arr2)
arr2.unshift(5)//very time consuming as because shifting of elements
console.log(arr2)//adding elemnt in front of array
console.log(arr2.indexOf(33))



let arr3 = [4,2,5,1,3]
console.log(arr3.slice(1,4))//index 1 sae 4 (not include ) kae bich kae sare element ko nikal lega [ 2, 5, 1 ]
console.log(arr3) //no change in original array [ 4, 2, 5, 1, 3 ]
console.log(arr3.splice(1,4)) // index 2, sae 4(included ) ke bich jitne element hai vo nikal lega [ 2, 5, 1, 3 ]
console.log(arr3) //change in original array [ 4 ]

/*
Ques = Slice vs Spice 
ans - Slice -  * No change in Original array
               * and not include the last element
      Splice - * change in Original array
               * include last element
*/