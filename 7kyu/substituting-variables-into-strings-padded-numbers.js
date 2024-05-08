//  Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

 // My solution
function solution(value){
  let arr = value.toString().split('')
  for(let i= 0; i <= arr.length; i++){
    while(arr.length < 5){
      arr.unshift('0')
    }
  } 
  return `Value is ${arr.join('')}`
}