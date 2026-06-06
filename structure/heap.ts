export default class MaxHeap {
    heap: number[] = []

    remove() {

        const max = this.heap[0];
        const end = this.heap[this.heap.length - 1];

        this.heap[this.heap.length - 1] = max;
        this.heap[0] = end;

        this.heap = this.heap.slice(0, this.heap.length - 1);

        this.siftDown(0)

        return max

    }

    insert(el: number) {
        this.heap.length++;
        this.heap[this.heap.length - 1] = el;

        this.siftUp(this.heap.length - 1);
    }

    siftUp(index: number) {

        if(index <= 0) return

        const I = this.heap[index];
        const parentIndex = this.parent(index);

        // if the parent is greater than parent then move up
        const parentValue = this.heap[parentIndex];

        if (I > parentValue) {

            this.heap[index] = parentValue;
            this.heap[parentIndex] = I;
            this.siftUp(parentIndex);

        }

    }

    siftDown(index: number) {
        const parent = this.heap[index];
        const leftIndex = this.leftChild(index)
        const rightIndex = this.rightChild(index)

        const heapLen = this.heap.length - 1;

        if (leftIndex > heapLen) { return; }

        const left = this.heap[leftIndex];
        const right = rightIndex <= heapLen ? this.heap[rightIndex] : -Infinity;

        let remIndex = index

        if (parent >= left && parent >= right) { return; }

        if (left > right) {
            this.heap[leftIndex] = parent;
            this.heap[index] = left;
            remIndex = leftIndex;
        } else {
            this.heap[rightIndex] = parent;
            this.heap[index] = right;
            remIndex = rightIndex;
        }

        this.siftDown(remIndex);

    }

    parent(i: number) {
        return Math.floor( (i - 1) / 2)
    }

    leftChild(index: number) {
        return 2 * index + 1
    }

    rightChild(index: number) {
     return 2 * index + 2
    }
}

// const heap = new MaxHeap();
// heap.insert(9)
// heap.insert(2)
// heap.insert(3)
// heap.insert(4)
//
// console.log(heap.heap)
//
// heap.remove()
//
// console.log(heap.heap)

// 9
// 7 8
// 54 31
// 0

