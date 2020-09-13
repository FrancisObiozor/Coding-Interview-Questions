using System;
using System.Text;

namespace Queue
{
    class Program
    {
        static void Main(string[] args)
        {
            var linkedList = new LinkedList();
            linkedList.Enqueue("Joy");
            linkedList.Enqueue("Matt");
            linkedList.Enqueue("Pavel");
            linkedList.Enqueue("Samir");
            linkedList.Dequeue();
            linkedList.Dequeue();
            linkedList.Peek();
        }

        public class Node
        {
            public string Value { get; set; }
            public Node Next { get; set; }

            public Node(string value)
            {
                Value = value;
                Next = null;
            }
        }

        public class LinkedList
        {
            private Node _first = null;
            private Node _last = null;
            private int _length = 0;

            public void Peek()
            {
                if (_length == 0)
                {
                    Console.WriteLine("There's nothing on the stack to view.");
                }
                else
                {
                    Console.WriteLine("The first value in the queue is: {0}", _first.Value);
                }
            }

            public void Enqueue(string value)
            {
                var newNode = new Node(value);

                if (_length == 0)
                {
                    _first = newNode;
                    _last = newNode;
                    _length++;
                }
                else
                {
                    _last.Next = newNode;
                    _last = newNode;
                    _length++;
                }
            }

            public void Dequeue()
            {
                if (IsEmpty())
                {
                    Console.WriteLine("There are no items in the queue to remove.");
                }
                else 
                {
                    _first = _first.Next;
                    _length--;
                }
                
            }

            public bool IsEmpty()
            {
                if (_length == 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

    }
}

