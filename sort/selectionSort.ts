function selectionSort(pot: number[]) {
  const smallestValue = (index: number, p: number[]) => {
    let smallest: number = p[index], smi: number = index;
    for (let i = index + 1; i < p.length; i++) {
      const element = p[i];
      if (element < smallest) {
        smallest = element;
        smi = i;
      }
    }

    return { smallest, smi };
  };

  for (let i = 0; i < pot.length; i++) {

    const v = pot[i];
    const { smallest, smi } = smallestValue(i, pot);

    if (smi != i) {
      pot[i] = smallest;
      pot[smi] = v;
    }

  }

  return pot
}

const array = [4, 56, 34, 10, 77, 51, 93, 30, 5, 52]
console.log(selectionSort(array))
