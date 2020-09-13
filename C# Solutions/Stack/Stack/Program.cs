//Using linked list
using System;
using System.Text;

namespace Stack
{
    class Program
    {
        static void Main(string[] args)
        {
            var stack = new Stack();
            stack.Push("Discord");
            stack.Push("Udemy");
            stack.Push("Google");
            stack.Pop();
            stack.Peek();
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

        public class Stack
        {
            private Node _top = null;
            private Node _bottom = null;
            private int _length = 0;

            public void Peek()
            {
                if (_length == 0)
                {
                    Console.WriteLine("There's nothing on the stack to view.");
                }
                else
                {
                    Console.WriteLine("The top value in the stack is: {0}", _top.Value);
                }
            }

            public void Push(string value)
            {
                var newNode = new Node(value);

                if (_length == 0)
                {
                    _top = newNode;
                    _bottom = newNode;
                    _length++;
                }
                else
                {
                    var temp = _top;
                    _top = newNode;
                    _top.Next = temp;
                    _length++;
                }
            }

            public void Pop()
            {
                if (this.IsEmpty())
                {
                    Console.WriteLine("There are no items in the stack to pop.");
                }
                else
                {
                    _top = _top.Next;
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


////Using an array
//using System;
//using System.Collections.Generic;
//using System.Text;

//namespace Stack
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            var stack = new Stack();
//            stack.Push("Discord");
//            stack.Push("Udemy");
//            stack.Push("Google");
//            stack.Peek();
//        }


//        public class Stack
//        {
//            private List<string> stack = new List<string>();

//            public void Peek()
//            {
//                if(stack.Count == 0)
//                {
//                    Console.WriteLine("The stack is empty. Use the push function to add more items.");
//                } 
//                else
//                {
//                    Console.WriteLine(stack[stack.Count-1]);
//                }

//            }

//            public void Push(string value)
//            {
//                stack.Add(value);
//            }

//            public void Pop()
//            {
//                if (this.IsEmpty())
//                {
//                    Console.WriteLine("There are no items in the stack to pop.");
//                }
//                else
//                {
//                    stack.RemoveAt(stack.Count - 1);
//                }
//            }

//            public bool IsEmpty()
//            {
//                if (stack.Count == 0)
//                {
//                    return true;
//                }
//                else
//                {
//                    return false;
//                }
//            }
//        }
//    }
//}
