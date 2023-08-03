// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array

function adjacentElementsProduct(array) {
 let product = 0
  let biggestProduct = array[0] * array[1]
  for(let i = 0; i <= array.length; i++){
    product = array[i] * array[i+1]
    if(product > biggestProduct){
      biggestProduct = product
    }
  }
  return biggestProduct 
}