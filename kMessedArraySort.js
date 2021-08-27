function sortKMessedArray(arr, k) {
  var originalPositions = {}
  var movedFlag = true;

  for (var idx = 0; idx < arr.length; idx += 1) {
    originalPositions[arr[idx]] = idx;
  }
  while (movedFlag === true) {
    movedFlag = false;
    for (var idx = 0; idx < arr.length; idx += 1) {
      if (arr[idx] > arr[idx + 1] && Math.abs(originalPositions[arr[idx]] - idx) <= k) {
        var temp = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
        movedFlag = true;
      } else if (arr[idx] < arr[idx - 1] && Math.abs(originalPositions[arr[idx]] - idx) <= k) {
        var temp = arr[idx];
        arr[idx] = arr[idx - 1];
        arr[idx - 1] = temp;
        movedFlag = true;
      }
    }
  }
  console.log(arr)
  return arr;
}

// arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
// k = 2
// sortKMessedArray(arr, k)

arr = [6,1,4,11,2,0,3,7,10,5,8,9]
k = 6
sortKMessedArray(arr, k) //  [0,1,2,3,4,5,6,7,8,9,10,11]