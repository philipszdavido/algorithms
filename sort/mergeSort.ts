function mergeSort(pot: number[]): number[] {
    if (pot.length <= 1) return pot;

    const sorted = [];

    // split pot
    const middle = Math.ceil((0 + (pot.length - 1) + 1) / 2);

    const pot1 = mergeSort(pot.slice(0, middle));
    const pot2 = mergeSort(pot.slice(middle, pot.length));

    let pot1Index = 0;
    let pot2Index = 0;

    let pot1Length = pot1.length;
    let pot2Length = pot2.length;

    while (true) {

      if (pot1Index >= pot1Length && pot2Index >= pot2Length) break;

      if (pot1Index >= pot1Length) {
        sorted.push(pot2[pot2Index]);
        pot2Index++;
        continue;
      }

      if (pot2Index >= pot2Length) {
        sorted.push(pot1[pot1Index]);
        pot1Index++;
        continue;
      }

      if (pot1[pot1Index] < pot2[pot2Index]) {
        sorted.push(pot1[pot1Index]);
        pot1Index++;
      } else {
        sorted.push(pot2[pot2Index]);
        pot2Index++;
      }
    }

    return sorted;
}

  const arr = [4, 56, 34, 10, 77, 51, 93, 30, 5, 52];
  console.log(mergeSort(arr));
