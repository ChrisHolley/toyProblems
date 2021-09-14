// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

// num = 4
// temp = 1 * 1 = 1 * 4 = 4
// 14
//   ^


// declare temp as int 1
// while num len is greater than 1
  //loop through str num
    // add int of idx of num to temp
  // num = temp
// return num

function persistentBugger(num) {
  let temp = 1;
  let numStr = num.toString();
  let len = numStr.length;
  let counter = 0;

  while (len > 1) {
    counter += 1;
    for (let idx = 0; idx < len; idx += 1) {
      temp *= Number(numStr[idx]);
    }
    numStr = temp.toString();
    len = numStr.length
    temp = 1;

  }

  return counter;
}

console.log(persistentBugger(9)) // result 0
console.log(persistentBugger(39)) // result 3
console.log(persistentBugger(999)) // result 4