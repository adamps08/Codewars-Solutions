// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)
// Good luck :)

// Check my other katas:

// Find Nearest square number

// Case-sensitive!

// Not prime numbers

// Find your caterer

/*My Solution*/
function alphabetic(s) {
  let s2 = s.split('').sort().join('')
  
  return s === s2 ? true : false
}