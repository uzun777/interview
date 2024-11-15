class Graph {
    structure = {}

    addVertex(vertex) {
        if (!this.structure[vertex]) {
            this.structure[vertex] = new Set([])
        }

    }

    printAdjacencyList() {
        const resultObject = {}
        for (const key in this.structure) {
            resultObject[key] = Array.from(this.structure[key])
        }
        return resultObject
    }

    addEdge(vertex, val) {
        this.addVertex(vertex)
        this.addVertex(val)
        if (!this.structure[vertex].has(val)) {
            this.structure[vertex].add(val)
        }
    }
}

const g = new Graph()
g.addVertex(0);
g.addVertex(1);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 2);
g.addEdge(2, 3);
console.log(g.printAdjacencyList());