function insertionSort(pot: number[]) {
  for (let i = 1; i < pot.length; i++) {
    const element = pot[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      const prevEl = pot[j];
      if (element < prevEl) {
        pot[j + 1] = prevEl;
      } else {
        pot[j + 1] = element;
        break;
      }
    }
  }
  return pot;
}

const arra = [4, 56, 34, 10, 77, 51, 93, 30, 5, 52];
console.log(insertionSort(arra));
