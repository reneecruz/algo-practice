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