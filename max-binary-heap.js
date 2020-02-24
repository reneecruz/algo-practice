class maxBinaryHeap {
    constructor() {
      this.values = [];
    }
  ​
    extractMax() {
      const max = this.values[0]; //we save this in a variable to return later
      const end = this.values.pop(); //pop out the last value in the array
      if (this.values.length > 0) {
        this.values[0] = end; // replace root with last value in array
        this.sinkDown(); //this calls the below function, which sinks the val down
      }
      return max; //returning the max
    }
  ​
    sinkDown() {
      let idx = 0;
      const length = this.values.length; //this can also be destructured as {length} = this.values
      const element = this.values[0];
      while (true) { //i think we can find a better condition here
        const leftChildIdx = 2 * idx + 1; //remember formula for leftchild is (2n+1)
        const rightChildIdx = 2 * idx + 2; //formla for right child is (2n+2)
        let leftChild; //initiate a variable to later hold the VALUE of the left child
        let rightChild; // initiate a variable to later hold the VALUE of the right child
        let swap = null;
  ​
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild > element) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > element) 
            || (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }