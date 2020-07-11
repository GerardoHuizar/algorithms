const sortArray = [1, 2, 3, 4, 5, 6];
const unsortArray = [-4, -5, 4, 7, 0, 1, -4, -3, -1, -2, 2, 4, 3, 5, 6];

function meanderingArray(sortArray) {
  let flag = true;
  let small = 0;
  let large = sortArray.length - 1;

  return sortArray.reduce((newArray, elem, i, array) => {
    flag ? newArray.push(array[large--]) : newArray.push(array[small++]);
    flag = !flag;

    return newArray;
  }, []);
}
// console.log(meanderingArray(sortArray));

function quickSort(unsortArray) {
  if (unsortArray.length <= 1) return unsortArray;

  let left = [];
  let right = [];
  let pivot = unsortArray.pop();

  unsortArray.map((element) => {
    element <= pivot ? left.push(element) : right.push(element);
  });

  return [].concat(quickSort(left), pivot, quickSort(right));
}

// console.log(quickSort(unsortArray));
