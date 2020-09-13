using System;
using System.Text;

namespace Linked_List
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
            //linkedList.Remove(1);
            linkedList.Reverse();
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

                _tail.Next = node;
                _tail = node;
                _length++;
            }

            public void Prepend(int value)
            {
                var node = new Node(value);
              
                node.Next = _head;
                _head = node;
                _length++;
                
            }

            public void Insert(int index, int value)
            {
                if(index == 0)
                {
                    Prepend(value);
                } 
                else if(index >= _length)
                {
                    Append(value);
                }
                else
                {
                    var current = _head;
                    for (int i = 0; i < index-1; i++)
                    {
                        current = current.Next;
                    }
                    var newNode = new Node(value);
                    newNode.Next = current.Next;
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
                else if(_length == 1 && index == 0)
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
                    for (int i = 0; i < index -1; i++)
                    {
                        current = current.Next;
                    }
                    current.Next = current.Next.Next;
                    _length--;
                }

            }

            public void Reverse()
            {
                
                var first = _head;
                var second = first.Next;
                first.Next = null;
                while(second != null)
                {
                    var third = second.Next;
                    second.Next = first;
                    first = second;
                    second = third;
                }
                _tail = _head;
                _head = first;
            }

            public string Print()
            {
                var listItems = new StringBuilder();
                var current = new Node(0);

                current = _head;
                while(current != null)
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
            
            public Node(int value)
            {
                Value = value;
                Next = null;
            }
        }



    }
}
