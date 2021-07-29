// // Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// // Explanation: Subarray with maximum sum is [5, 1, 3].

// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// // Explanation: Subarray with maximum sum is [3, 4].

const maximumSumSubarrayOfSizeK = (arr, k) => {
  let maxSum = 0;
  let tempSum = 0;

  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
    if (idx != 0) {
      console.log(idx, arr[idx - 1], arr[idx + k])
      tempSum -= arr[idx - 1]
      tempSum += arr[idx + k - 1]
    } else {
      for (let jdx = 0; jdx < k; jdx += 1) {
        if (arr[idx + jdx] != undefined) {
          tempSum += arr[idx + jdx]
        }
      }
    }
  }
  return maxSum;
}

arr1 = [2, 1, 5, 1, 3, 2]
output1 = maximumSumSubarrayOfSizeK(arr1, 3);

arr2 = [2, 3, 4, 1, 5]
output2 = maximumSumSubarrayOfSizeK(arr2, 2);

console.log(output1)
console.log(output2)
