
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


/*My Solution*/

function XO(str) {
 let xAmount = 0
 let oAmount = 0
 let arr = str.split('')
 for(let i =0;i<=arr.length;i++){
   if (arr[i] === 'x' ||arr[i] === 'X'){
     xAmount ++
   }else if(arr[i]==='o'|| arr[i] === 'O'){
     oAmount++
   }
 }
return xAmount === oAmount 
}