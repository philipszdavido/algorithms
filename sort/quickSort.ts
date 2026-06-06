function quickSort(array: number[]): number[] {
    if (array.length <= 1) return array

    const pivot = array[Math.floor(Math.random() * array.length)]
    const left = array.filter(x => x < pivot)
    const right = array.filter(x => x > pivot)

    return [...quickSort(left), pivot].concat(quickSort(right))
}

const quickSortArray = [4, 56, 34, 10, 77, 51, 93, 30, 5, 52]
console.log(quickSort(quickSortArray))
