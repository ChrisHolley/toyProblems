function validBraces(braces) {
  var stack = [];

  for (var idx = 0; idx < braces.length; idx += 1) {
    var view = braces[idx];

    if (view === '(' || view === '[' || view === '{') {
      stack.push(view)

    } else if (view === ')' || view === ']' || view === '}') {

        if (view === ')' && stack[stack.length - 1] !== '(') {
          return false

        } else if (view === ']' && stack[stack.length - 1] !== '[') {
          return false

        } else if (view === '}' && stack[stack.length - 1] !== '{') {
          return false
        }
      stack.pop()
    }
  }
  if (stack.length > 0) {
    return false

  } else {
    return true
  }
}

console.log(validBraces('()'))
console.log(validBraces('({)}'))
console.log(validBraces('([{{[('))
console.log(validBraces('([{}])'))