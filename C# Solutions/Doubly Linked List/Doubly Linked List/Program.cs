using System;
using System.Text;

namespace Doubly_Linked_List
{
    class Program
    {
        static void Main(string[] args)
        {
            var linkedList = new LinkedList(5);
            linkedList.Append(16);
            linkedList.Append(20);
            linkedList.Prepend(1);
            linkedList.Insert(1, 3);
            linkedList.Remove(1);
            Console.WriteLine(linkedList.Print());
        }

        public class LinkedList
        {
            private Node _head;
            private Node _tail;
            private int _length;

            public LinkedList(int value)
            {
                _head = new Node(value);
                _tail = _head;
                _length = 1;
            }

            public void Append(int value)
            {
                var node = new Node(value);
             
                node.Previous = _tail;
                _tail.Next = node;
                _tail = node;
                _length++;
            }

            public void Prepend(int value)
            {
                var node = new Node(value);

                node.Next = _head;
                _head.Previous = node;
                _head = node;
                _length++;

            }
            
            public void Insert(int index, int value)
            {
                if (index == 0)
                {
                    Prepend(value);
                }
                else if (index >= _length)
                {
                    Append(value);
                }
                else
                {
                    var current = _head;
                    for (int i = 0; i < index - 1; i++)
                    {
                        current = current.Next;
                    }
                    var newNode = new Node(value);
                    newNode.Next = current.Next;
                    newNode.Previous = current;
                    current.Next.Previous = newNode;
                    current.Next = newNode;
                    _length++;
                }
            }
           
            public void Remove(int index)
            {
                if (index >= _length)
                {
                    Console.WriteLine("The index cannot be greater than the length of the linked list.");
                }
                else if (_length == 1 && index == 0)
                {
                    _head = null;
                    _tail = null;
                    _length--;
                }
                else if (index == 0)
                {
                    _head = _head.Next;
                    _length--;
                }
                else
                {
                    var current = _head;
                    for (int i = 0; i < index - 1; i++)
                    {
                        current = current.Next;
                    }
                    current.Next.Next.Previous = current;
                    current.Next = current.Next.Next;

                    _length--;
                }

            }
            
            public string Print()
            {
                var listItems = new StringBuilder();
                var current = _head;
                while (current != null)
                {
                    listItems.Append((current.Value).ToString() + " ");
                    current = current.Next;
                }

                return listItems.ToString();
            }


        }

        public class Node
        {
            public int Value { get; set; }
            public Node Next { get; set; }
            public Node Previous { get; set; }

            public Node(int value)
            {
                Value = value;
                Next = null;
                Previous = null;
            }
        }
    }
}
