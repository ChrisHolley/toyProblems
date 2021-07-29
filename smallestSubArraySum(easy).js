// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].Input: [2, 1, 5, 2, 3, 2], S=7

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1]
// or [1, 1, 6].

const smallest_subarray_with_given_sum = function(s, arr) {
  let minLength = Infinity;
  let windowSum = 0
  let windowLen = 0

  for (let idx = 0; idx < arr.length; idx += 1) {
    // console.log('iteration', idx)
    if (arr[idx] >= s) {
      return 1;
    }
    while (windowSum < s && windowLen < arr.length - idx) {
      windowLen += 1;
      windowSum += arr[windowLen + idx - 1]
    }

    if (windowSum >= s) {
      if (windowLen < minLength) {
        minLength = windowLen
      }
      if (windowSum >= s) {
        windowSum -= arr[idx === 0 ? 0 : idx - 1]
        windowLen -= 1
      }
    }
  }
  return minLength
};

let arr1 = [2, 1, 5, 2, 8]
let s1 = 7
let output1 = smallest_subarray_with_given_sum(s1, arr1) // should print 1
console.log(output1)
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

let arr2 = [2, 1, 5, 2, 3, 2]
let s2 = 7
let output2 = smallest_subarray_with_given_sum(s2, arr2)
console.log(output2) // should print 2
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

let arr3 = [3, 4, 1, 1, 6]
let s3 = 8;
let output3 = smallest_subarray_with_given_sum(s3, arr3);
console.log(output3) // should print 3
// Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

