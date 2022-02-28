const binarySearch = (arr, findNumber) => {
  let start = 0;
  let end = arr.length - 1
  while (start <= end){
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === findNumber){
      return mid;
    }
   if(arr[mid] > findNumber){
      end = mid - 1;
    }
    else if (arr[mid] < findNumber){
      start = mid + 1;
    }
    return null;
  }

}
const numbers = [1, 2, 3, 4, 5, 10, 11, 22, 33,]
const result = binarySearch(numbers, 6)
console.log(result);

