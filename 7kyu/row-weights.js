// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.



/*My Solution*/

function rowWeights(array){
let teamOne = []
let teamTwo = []
  array.forEach((n,i) => {
  if(i % 2 === 0){
    teamOne.push(n)
  }else teamTwo.push(n)
})  
return [teamOne.reduce((a,b) =>a + b,0),teamTwo.reduce((a,b) =>a + b,0)]
}