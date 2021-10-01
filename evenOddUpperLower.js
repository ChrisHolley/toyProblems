solution = function(str) {
  var result = ''

  // for (var char in str) {
  //   if (char % 2 !== 0) {
  //       result += str[char].toLowerCase()
  //   } else {
  //     result += str[char].toUpperCase()
  //   }
  // }
  // return result;


  return str.split('').map((char, idx) => (idx % 2 !== 0 ? char.toLowerCase() : char.toUpperCase()))
}

console.log(solution('asdfasdf'))