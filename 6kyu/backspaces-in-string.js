// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

/*My Solution*/

function cleanString(s) {
  let arr = s.split('');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '#') {
      result.pop(); 
    } else {
      result.push(arr[i]);
    }
  }
  return result.join('');
}