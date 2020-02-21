class MaxBinaryHeap {
    constructor() {
      this.values = []
    }
    insert(val) {
      this.values.push(val)
  
      // Set positions
      let childIdx = this.values.length-1
      let parentIdx = Math.floor((childIdx - 1) / 2)
  
      while (childIdx != 0 && this.values[parentIdx] < this.values[childIdx]) {
  
        // swap
        let temp1 = this.values[childIdx]
        this.values[childIdx] = this.values[parentIdx]
        this.values[parentIdx] = temp1
        
        // Set postions
        childIdx = parentIdx
        parentIdx = Math.floor((childIdx - 1) / 2)
      }
    }
  }          
                            
  let heap = new MaxBinaryHeap()
  
  heap.insert(3)
  heap.insert(5)
  heap.insert(15)
  
  console.log('heap -->' ,heap, 'vals -->', heap.values)
