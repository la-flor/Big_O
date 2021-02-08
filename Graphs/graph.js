class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.map((newVertex) => this.nodes.add(newVertex));
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    this.nodes.forEach((node) => {
      if (node.value === v1.value) {
        node.adjacent.add(v2);
      }
      if (node.value === v2.value) {
        node.adjacent.add(v1);
      }
    })
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    this.nodes.forEach((node) => {
      if (node.value === v1.value) {
        node.adjacent.delete(v2);
      }
      if (node.value === v2.value) {
        node.adjacent.delete(v1);
      }
    })
  }

  /* this function accepts a vertex and removes it from the nodes property, 
    it also updates any adjacency lists that include that vertex */
  removeVertex(vertex) {
    this.nodes.forEach((node) => {
      if (node.value === vertex.value) {
        this.nodes.delete(node);
      }
      if (node.adjacent === vertex.value) {
        node.adjacent.delete(vertex);
      }
    })
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const stack = [start];
    const result = [];
    const checked = new Set();
    let current;

    checked.add(start);

    while (stack.length) {
      current = stack.pop();
      result.push(current.value);

      current.adjacent.forEach(neighbor => {
        if (!checked.has(neighbor)) {
          checked.add(neighbor);
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const stack = [start];
    const result = [];
    const checked = new Set();
    let current;

    checked.add(start);

    while (stack.length) {
      current = stack.shift();
      result.push(current.value);

      current.adjacent.forEach(neighbor => {
        if (!checked.has(neighbor)) {
          checked.add(neighbor);
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}


module.exports = {Graph, Node}