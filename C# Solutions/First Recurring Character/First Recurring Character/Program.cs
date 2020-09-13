using System;
using System.Collections;

namespace First_Recurring_Character
{
    class Program
    {
        static void Main(string[] args)
        {
            var input1 = new int[] { 2, 5, 1, 2, 3, 5, 1, 2, 4 }; //should return 2
            var input2 = new int[] { 2, 1, 1, 2, 3, 5, 1, 2, 4 };// should return 1
            var input3 = new int[] { 2, 3, 4, 5 }; //null
            //Output first reoccuring number
            //It should be nullable
            /*
             1. Load values into hash table with the key being the input and value being 0
             2. Loop though hash table
                a. save the key in a temp variable
                b. delete that entry
                c. see if the key exists in the remainder of the hash table
                d. if it exists then return the temp key else continue to the next element*/

            string FirstRecurringNumber(int[] inputs)
            {
                string first = "undefined";
                Hashtable hash = new Hashtable();
                foreach (var input in inputs)
                {
                    if (hash.ContainsKey(input))
                    {
                        first = input.ToString();
                        return first;
                    }
                    hash.Add(input, 0);      
                }
                
                return first;
            }
            var first = FirstRecurringNumber(input1);
            Console.WriteLine("The first reoccuring number is: {0}", first);

        }
    }
}
