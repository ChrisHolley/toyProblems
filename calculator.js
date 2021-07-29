const calculator = {
    evaluate : function(mathString) {
        mathStr = mathString.replace(/[ ]/g, '')
        console.log(mathStr)
        for (var idx = 0; idx < mathStr.length - 1; idx += 1) {
            num1 = '';
            num2 = '';
            if (mathStr[idx] == '/' || mathStr[idx] == '*') {
                leftIdx = idx - 1
                rightIdx = idx + 1
                while (mathStr[leftIdx] != '*' && mathStr[leftIdx] != '/' && mathStr[leftIdx] != '+' && mathStr[leftIdx] != '-' && mathStr[leftIdx] != undefined) {
                    num1 += mathStr[leftIdx]
                    console.log('while loop ran', 'main idx', idx, 'left idx', leftIdx, 'num1', num1)
                    if (mathStr[leftIdx] == undefined) break;
                    leftIdx -= 1
                    console.log(num1)
                }
            }
        }
    }
}

var ex;
ex = '2 / 2 + 3 * 4 - 6';
// console.log(ex.replace())
calculator.evaluate(ex);

