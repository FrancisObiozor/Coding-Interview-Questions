using System;

namespace Reverse_String
{
    class Program
    {
        static void Main(string[] args)
        {
            var str1 = "Hello!";

            string ReverseString(string str)
            {
                var strLength = str.Length;
                var reverseStr = new Char[strLength];
                var count = 0;
                for (int i = strLength - 1; i >= 0; i--)
                {
                    reverseStr[count] = str[i];
                    count++;
                }
                return new string(reverseStr);
            }

            Console.WriteLine(ReverseString(str1));
            
        }
    }
}
