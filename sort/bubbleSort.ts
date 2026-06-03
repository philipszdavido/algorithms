function bubbleSort(arr: Array<number>) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            const el = arr[i]
            let next = arr[i + 1];

            if (el > next) {
                arr[i + 1] = el
                arr[i] = next
            }
        }
    }

    return arr
}

const bubbleSortArray = [4, 56, 34, 10, 77, 51, 93, 30, 5, 52]
console.log(bubbleSort(bubbleSortArray))

