using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Graph
{
    class Program
    {
        static void Main(string[] args)
        {
            var myGraph = new Graph();

            myGraph.AddVertex(0);
            myGraph.AddVertex(1);
            myGraph.AddVertex(2);
            myGraph.AddVertex(3);
            myGraph.AddVertex(4);
            myGraph.AddVertex(5);
            myGraph.AddVertex(6);
            myGraph.AddEdge(3, 1);
            myGraph.AddEdge(3, 4);
            myGraph.AddEdge(4, 2);
            myGraph.AddEdge(4, 5);
            myGraph.AddEdge(1, 2);
            myGraph.AddEdge(1, 0);
            myGraph.AddEdge(0, 2);
            myGraph.AddEdge(6, 5);
            myGraph.ShowConnections();
        }

        public class Graph
        {
            private int _numberOfNodes = 0;
            private Dictionary<int, List<int>> _adjacentList = new Dictionary<int, List<int>>();

            public void AddVertex(int node)
            {
                if (_adjacentList.ContainsKey(node))
                {
                    Console.WriteLine("This vertex already exists.");
                }
                else
                {
                    _adjacentList.Add(node, new List<int>());
                    _numberOfNodes++;
                }
            }

            public void AddEdge(int node1, int node2)
            {
                if(!(_adjacentList.ContainsKey(node1) && _adjacentList.ContainsKey(node2)))
                {
                    Console.WriteLine("You can't add the edge between {0} and {1} because either one or both vertices do not exist. " +
                                        "Please create the vertices before adding the edges.", node1, node2);
                }
                else
                {
                    _adjacentList[node1].Add(node2);
                    _adjacentList[node2].Add(node1);
                }
            }

            public void ShowConnections()
            {
                var graph = new StringBuilder();
                for (int i = 0; i < _numberOfNodes; i++)
                {
                    var count = 1;
                    graph.Append(i.ToString() + ": ");
                    foreach(var edge in _adjacentList[i])
                    {
                        if(count<_adjacentList[i].Count)
                        {
                            graph.Append(edge.ToString() + ", ");
                            count++;
                        }
                        else
                        {
                            graph.Append(edge.ToString());
                            count++;
                        }
                        
                    }
                    graph.Append(Environment.NewLine);
                }
                Console.WriteLine(graph.ToString());
            }

        }
    }
}
