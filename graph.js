class graph{
    constructor(){
        this.adjacencyList={};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[]
    }
    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1]=this.adjacencyList[v1].filter(v=>v !==v2)
        this.adjacencyList[v1]=this.adjacencyList[v2].filter(v=>v !==v1)
    }
    removeVertex(vertex){
        while(this.adjacency[vertex].length){
            const adjacentVertex = this.adjacentList[vertex].pop()
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    dfsRecursive(start){
        const result =[];
        const visited={};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex)return null;
            visited[vertex]= true;
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
                
            });
        })(start)
        return result
    }
}

let g= new graph()


g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g.dfsRecursive("A"))