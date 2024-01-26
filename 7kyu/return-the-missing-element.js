// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.


/*My Solution*/

function getMissingElement(array){
  const sorted = array.sort((a,b)=>a-b)
  for (let i = 0; i <= array.length -1; i++){
    if(sorted[i] + 1 !== sorted[i+1]){
      return sorted[i] === 9 ? 0 : sorted[i]+1
    }
  }
}