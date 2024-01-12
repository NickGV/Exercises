function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; 
  }

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftSorted.length && rightIndex < rightSorted.length) {
    if (leftSorted[leftIndex] < rightSorted[rightIndex]) {
      result.push(leftSorted[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightSorted[rightIndex]);
      rightIndex++;
    }
  }

  return result
    .concat(leftSorted.slice(leftIndex))
    .concat(rightSorted.slice(rightIndex));
}

console.log(mergeSort([2, 12, 32, 12, 32, 12, 213, 5, 32, 123]));

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([1,2,3,12,31,21,1,2,32,231,2132,12]))