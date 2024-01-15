// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

/*My Solution*/

String.prototype.camelCase=function(){
 let caps = this.split(' ').map(word => {
   return word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word
 }).join('')
 
return caps.split('').map(x => x === ' ' ? '' : x).join('')
 
}