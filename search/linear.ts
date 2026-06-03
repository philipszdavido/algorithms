function linearSearch<T>(pot: T[], key: T) {
  for (let i = 0; i < pot.length; i++) {
    const element = pot[i];

    if (element === key) {
      return i;
    }
  }
  return -1;
}

console.log(
  linearSearch([2, 3, 5, 10, 27, 30, 34, 51, 56, 65, 77, 81, 82, 93, 99], 56),
);
