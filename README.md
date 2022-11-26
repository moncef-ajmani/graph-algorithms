# Graph Algorithms

## Bellman Ford

In BellmanFord.js,file, we have implemented the Bellman-Ford algorithm to find the shortest path between two vertices in a graph.

The Bellman-Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph.

We have represented the graph using an adjacency list.

The algorithm works as follows:

1) Initialize the distance of all vertices to infinity and the distance of the source vertex to 0.

2) For each edge in the graph, relax the edge. That is, if the distance of the destination vertex is greater than the distance of the source vertex plus the weight of the edge, update the distance of the destination vertex to the distance of the source vertex plus the weight of the edge.

3) Repeat step 2 until there are no more edges to relax.

We have implemented the algorithm in the BellmanFord class.

The constructor of the BellmanFord class takes in the graph and the number of vertices as parameters.

The start() method is used to relax all edges starting from source parameter as racine node.

The shortest_path() method is used to find the shortest path between the source vertex and the destination vertex.

### Execution
```
node BellmanFord.js
```
