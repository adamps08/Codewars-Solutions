// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters
//solutin

function kebabize(str) {
  return str.split('').map((char, index) => {
    if (char >= 'A' && char <= 'Z') {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    } else if (char >= 'a' && char <= 'z') {
      return char;
    }
    return '';
  }).join('');
}