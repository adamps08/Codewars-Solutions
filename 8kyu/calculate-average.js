// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My Solution

function findAverage(array) {
  let total = 0;
  array.forEach(n => total += n);
  if (array.length === 0){
    return 0;
  }else{
    return total/array.length;
  }
}