/*
    In this code, we have implemented the Bellman-Ford algorithm using JavaScript. 
    The Bellman-Ford algorithm is used to find the shortest path between two vertices in a graph. 
    The algorithm works by iterating through the edges of the graph and updating the distance of each vertex from the source vertex. 
    The algorithm also keeps track of the previous vertex for each vertex, so that the shortest path can be found.
*/
class Edge{
    constructor(from,to,cost){
        this.from = from
        this.to = to
        this.cost = cost
    }
}

class BellmanFord{
    constructor(graph,vertices){
        this.V = vertices // Total number of vertices in the graph
        this.graph = graph
        this.distance = Array(this.V).fill(Infinity)
        this.previous = Array(this.V).fill(null)
    }

    start = (source) =>{
        this.distance[source] = 0
        for(let i=0;i<this.V-1;i++){
            for(let edge of this.graph){
                const tempDistance = this.distance[edge.from]+edge.cost
                if(tempDistance < this.distance[edge.to]){
                    this.distance[edge.to] = tempDistance
                    this.previous[edge.to] = edge.from
                }
            }
        }
    }
    shortest_path = (source,distination) =>{
        const path = [distination]
        let previous = this.previous[distination]
        while(previous){
            path.unshift(previous)
            previous = this.previous[previous]
        }
        return [...new Set([source,...path])]
    }
}

// Main Program 

const V = 6, racine = 0

const graph = []

graph.push(new Edge(0,1,4))
graph.push(new Edge(0,2,2))
graph.push(new Edge(1,3,10))
graph.push(new Edge(1,2,5))
graph.push(new Edge(2,4,3))
graph.push(new Edge(4,3,4))
graph.push(new Edge(3,5,11))



const bellmanFord = new BellmanFord(graph,V)
bellmanFord.start(racine)

console.log("Shortest path from 0 to 5 : ",bellmanFord.shortest_path(0,5))
console.log("Shortest path from 1 to 3 : ",bellmanFord.shortest_path(1,3))
console.log("Shortest path from 2 to 3 : ",bellmanFord.shortest_path(2,3))
