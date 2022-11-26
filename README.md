# graph-algorithms

## BellmanFord algorithm

In this file BellmanFord.js, we have implemented the Bellman-Ford algorithm to find the shortest path between two vertices in a graph.

The Bellman-Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph.

We have represented the graph using an adjacency list.

The algorithm works as follows:

1) Initialize the distance of all vertices to infinity and the distance of the source vertex to 0.

2) For each edge in the graph, relax the edge. That is, if the distance of the destination vertex is greater than the distance of the source vertex plus the weight of the edge, update the distance of the destination vertex to the distance of the source vertex plus the weight of the edge.

3) Repeat step 2 until there are no more edges to relax.
