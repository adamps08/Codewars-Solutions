// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"


/*My Solution*/


function whatCentury(year){
 let num = Number(year)
 let century = Math.ceil(num / 100)
 let lastDigit = century % 10
 

if (century >= 11 && century <= 13) {
    return `${century}th`;
  } else if (lastDigit === 1) {
    return `${century}st`;
  } else if (lastDigit === 2) {
    return `${century}nd`;
  } else if (lastDigit === 3) {
    return `${century}rd`;
  } else {
    return `${century}th`;
  }
}