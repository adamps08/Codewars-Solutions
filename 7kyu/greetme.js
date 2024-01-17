// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

/*My Solution*/

var greet = function(name) {
  const caps = name.split('').map(x => {
    return name.indexOf(x) === 0 ? x[0].toUpperCase() : x.toLowerCase()
  }).join('')
return `Hello ${caps}!`
};