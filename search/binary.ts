function binarySearch(pot: number[], key: number) {
  let low = 0;
  let high = pot.length - 1;
  let middle = Math.ceil((low + high + 1) / 2);
  let location = -1;

  while (true) {
    const value = pot[middle];
    if (key === value) {
      location = middle;
      break;
    } else if (key > value) {
      // we know that key can never match from low to middle
      // its in upper half
      low = middle;
      high = pot.length - 1;
    } else if (key < value) {
      low = 0;
      high = middle;
    }

    if (low >= high) break;

    middle = Math.ceil((low + high + 1) / 2);
  }

  return location;
}

console.log(
  binarySearch([2, 3, 5, 10, 27, 30, 34, 51, 56, 65, 77, 81, 82, 93, 99], 56),
);
