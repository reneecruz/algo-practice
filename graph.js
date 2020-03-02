class Graph {
    constructor() {
      this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
      }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1) 
    }

    removeVertex(vtx) {
        this.adjacencyList[vtx].forEach(v => {
          this.removeEdge(vtx, v);
        })
        delete this.adjacencyList[vtx]
      }

      DFS(vtx) {
        const stack = [vtx];
        const visited = {};
        const result = [];
        while (stack.length) {
          const currentNode = stack.pop();
          if (visited[currentNode]) continue;
          visited[currentNode] = true;
          result.push(currentNode);
          this.adjacencyList[currentNode].forEach(n => {
            stack.push(n);
          });
        }
        return result;
      }
    ​
}