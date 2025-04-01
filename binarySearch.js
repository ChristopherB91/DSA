const binarySearch = (orgArr, num) => {
  let low = 0;
  let high = orgArr.length - 1;
  let center = Math.round((low + high) / 2);

  while (low <= high) {
    if (orgArr[center] == num) {
      return center;
    }
    if (orgArr[center] > num) {
      high = center;
      center = Math.floor((low + high) / 2);
    }
    if (orgArr[center] < num) {
      low = center;
      center = Math.ceil((low + high) / 2);
    }
  }
};

const array = [3, 10, 14, 17, 22, 38, 44, 52, 61];

console.log(binarySearch(array, 52));
