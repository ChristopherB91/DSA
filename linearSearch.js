const linearSearch = (arr, num) => {
  let found = false;
  arr.forEach((element) => {
    if (element == num) {
      found = true;
    }
  });

  return found;
};

const data = [25, 26, 18, 35, 13, 4, 9, 24];

console.log(linearSearch(data, 24));
