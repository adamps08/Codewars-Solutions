// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
//     meal: 'vegetarian' },
// ];

/*My Solution*/
function orderFood(list) {
let meals = {
  vegetarian: 0,
  standard:0,
  vegan: 0,
   'gluten-intolerant':0,
  diabetic: 0
 
}

list.forEach(person => {
  if(person.meal === 'vegetarian'){
    meals.vegetarian++
  }else if(person.meal === 'standard'){
    meals.standard++
  }else if(person.meal === 'diabetic'){
    meals.diabetic++
  }else if(person.meal === 'gluten-intolerant'){
    meals['gluten-intolerant']++
  }else meals.vegan++
})
Object.keys(meals).forEach(mealType => {
    if (meals[mealType] === 0) {
      delete meals[mealType];
    }
  });
return meals
}