using System;
using System.Collections.Generic;
using System.Threading;

namespace Fibonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = 5;
            Console.WriteLine("Fibonacci of {0} using iteration is {1}.", num, FibonacciIterative(num).ToString());
            Console.WriteLine("Fibonacci of {0} using recursion is {1}.", num, FibonacciRecursive(num).ToString());

        }

        public static int FibonacciIterative(int n)
        {
            if(n == 0)
            {
                return 0;
            }
            else if (n == 1)
            {
                return 1;
            }
            else
            {
                var fibonacci = new List<int>();
                fibonacci.Add(0);
                fibonacci.Add(1);
                for (int i = 2; i <= n; i++)
                {
                    fibonacci.Add(fibonacci[i - 1] + fibonacci[i - 2]);
                }
                return fibonacci[n];
            }

            
        }

        public static int FibonacciRecursive(int n)
        {
            //int count = 0;
            if(n == 0)
            {
                return 0;
            }
            else if(n == 1)
            {
                return 1;
            }
            return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2);           
            //count++;
        }
    }
}
