using System;
using System.Security.Cryptography.X509Certificates;

namespace Binary_Search_Tree
{
    class Program
    {
        static void Main(string[] args)
        {
            var tree = new BinarySearchTree();
            tree.Insert(9);
            tree.Insert(4);
            tree.Insert(6);
            tree.Insert(20);
            tree.Insert(170);
            tree.Insert(15);
            tree.Insert(1);
            tree.Lookup(15);
        }

        public class Node
        {
            public Node Left { get; set; }
            public Node Right { get; set; }
            public int Value { get; set; }

            public Node(int value)
            {
                Value = value;
                Left = null;
                Right = null;
            }
        }
        
        public class BinarySearchTree
        {
            private Node _root = null;

            public void Insert(int value)
            {
                var newNode = new Node(value);

                if (_root == null)
                {
                    _root = newNode;
                }
                else
                {
                    var previous = _root;
                    var current = _root;

                    while(current != null)
                    {
                        if(value > current.Value)
                        {
                            previous = current;
                            current = current.Right;
                        }
                        else
                        {
                            previous = current;
                            current = current.Left;
                        }

                        if(current == null && value > previous.Value)
                        {
                            current = newNode;
                            previous.Right = newNode;
                            break;
                        }
                        else if(current == null && value < previous.Value)
                        {
                            current = newNode;
                            previous.Left = newNode;
                            break;
                        }
                    }
                }

            }

            public Node Lookup(int value)
            {
                var previous = _root;
                var current = _root;
                if (_root == null)
                {
                    Console.WriteLine("There's no root node.");
                }
                else if (_root.Left == null && _root.Right == null)
                {
                    Console.WriteLine("There's only one node with {0} as its value.", _root.Value);
                }
                else
                {
                    while (current.Value != value)
                    {
                        if (value > current.Value)
                        {
                            current = current.Right;
                        }
                        else
                        {
                            current = current.Left;
                        }
                    }
                }
                Console.WriteLine("The value of the node is: {0}", current.Value);
                return current;
            }

            /*public void Remove(int value)
            {
                if (_root == null)
                {
                    Console.WriteLine("There are no items to remove.");
                }
                else if (_root.Left == null && _root.Right == null && _root.Value != value)
                {
                    Console.WriteLine("There's only one node with {0} as its value. It does not match your value of {1}", _root.Value, value);
                }
                else if (_root.Left == null && _root.Right == null && _root.Value == value)
                {
                    _root = null;
                }
                else
                { 
                    var previous = _root;
                    var current = _root;

                    while (current != null)
                    {
                        if (value > current.Value)
                        {
                            previous = current;
                            current = current.Right;
                        }
                        else
                        {
                            previous = current;
                            current = current.Left;
                        }

                        if (current == null && value > previous.Value)
                        {
                            current = newNode;
                            previous.Right = newNode;
                            break;
                        }
                        else if (current == null && value < previous.Value)
                        {
                            current = newNode;
                            previous.Left = newNode;
                            break;
                        }
                    }
                }
            }*/
        }
        
    }
}

