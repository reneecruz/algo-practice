class maxBinaryHeap {
    constructor() {
      this.values = []
    }
    bubbleUp(arr) {
      let i = this.values.length - 1
      let parentI = Math.floor((i - 1)/2)
      console.log('parent', parentI)
      while(this.values[parentI] < this.values[i]) {
        console.log('values', this.values)
        let tmp = this.values[parentI]
        this.values[parentI] = this.values[i]
        this.values[i] = tmp
      }
    }
    insert(num) {
      // insert into next available spot
      // swap while node value is less than parent or if parent does not exist then node becomes root
      this.values.push(num)
      this.bubbleUp(this.values)
    }
    extractMax() {
    }
  }
  let heap = new maxBinaryHeap
  heap.insert(10)
  heap.insert(12)
  console.log(heap)

//   push the value into the values property on the heap
// bubbleUp helper function:
// create a variable called index which is the length of the values property - 1
// create a variable called parentIndex which is the floor of (index-1)/2
// keep looping as long as the values element at the parentIndex is less than the values element at the child index
// swap the value of the values element at the parentIndex with the value of the element property at the child index
// set the index to be the parentIndex, and start over

// Big O of Binary Heaps: 
// Insertion: 0(log n)
// Removal: 0(log n)
// Search: 0(n)

// Use when trying to get max or min from group of data, i.e. stocks
// Use for Priority Queue Node Class