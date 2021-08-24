function sumThree(arr, target) {
  arr.sort((a, b) => a - b)
  var closestSumToTarget = Infinity
  var currentSum;
  for (var idx = 0; idx < arr.length; idx += 1) {
    var currentSum = arr[idx] + arr[idx +1] + arr[idx +2]
    if (target - Math.abs(currentSum) < Math.abs(closestSumToTarget)) {
      closestSumToTarget = currentSum
    }
  }
  return closestSumToTarget;
}

console.log(sumThree([-1, -4, 2, 1], 1))