// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

/*My Solution*/

function findShort(s){
  const newArr =s.split(' ').sort((a,b) => a.length - b.length)
  return newArr[0].length
}