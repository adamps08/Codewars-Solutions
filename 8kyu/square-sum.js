// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// My Solution
function squareSum(numbers){
  let sum = 0;
  numbers.forEach(n => {
    sum += n * n
  });
  return sum;
}