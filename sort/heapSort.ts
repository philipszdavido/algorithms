import MaxHeap from "../structure/heap";

function heapSort<T>(array: T[]) {
    const heap = new MaxHeap();
    const sorted = new Array(array.length);


    // phase 1
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        heap.insert(item as number);
    }

    // phase 2
    for (let i = array.length - 1; i >= 0 ; i--) {
        sorted[i] = heap.remove()
    }

    return sorted

}

const heapSortArray = [4, 56, 34, 10, 77, 51, 93, 30, 5, 52]
console.log(heapSort(heapSortArray))
