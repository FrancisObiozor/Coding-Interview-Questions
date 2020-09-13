using System;

namespace Factorial
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = 5;
            int recursion = FindFactorialRecursive(number);
            int iterative = FindFactorialIterative(number);

            Console.WriteLine("The factorial using recursion is: {0}", recursion);
            Console.WriteLine("The factorial using iteration is: {0}", iterative);

        }

        public static int FindFactorialRecursive(int number)
        {
            if (number == 2)
            {
                return 2;
            }
            
            return number*FindFactorialRecursive(number-1);
        }

        public static int FindFactorialIterative(int number)
        {
            var factorial = number;
            for (int i = 1; i < number; i++)
            {
                factorial = factorial * i;
            }
            return factorial;
        }
    }
}
