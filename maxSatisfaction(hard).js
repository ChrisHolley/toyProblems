var maxSatisfaction = function(satisfaction) {
  satisfaction.sort((a, b) => a - b);
  var max = satisfaction.reduce((a, b, i) => a + b * (i + 1));
  var sum = satisfaction.reduce((a, b) => a + b);

  for (var idx = 0; idx < satisfaction.length; idx += 1) {
    if (max > max - sum) {
      return max
    }
    max -= sum;
    sum -= satisfaction[idx];
  }
  return 0;
};

console.log(maxSatisfaction([-1,-8,0,5,-9]), 'expect: 14')
console.log(maxSatisfaction([4,3,2]), 'expect: 20')
console.log(maxSatisfaction([-1,-4,-5]), 'expect: 0')
console.log(maxSatisfaction([-2,5,-1,0,3,-3]), 'expect: 35')
console.log(maxSatisfaction([76,83,55,-36,-8,40,-60,-72,27,-32,37,1,77,24,-46,-26,20,-89,-35,-99,58,-7]), 'expect: 7281')

