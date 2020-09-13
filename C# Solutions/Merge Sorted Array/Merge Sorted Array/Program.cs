using System;

namespace Merge_Sorted_Array
{
    class Program
    {
        static void Main(string[] args)
        {
            var arr1 = new int[] { 1, 3, 5, 7, 9 };
            var arr2 = new int[] { 2, 6, 10, 12, 25, 30 };

            int[] MergeSortedArrays(int[] a1, int[] a2)
            {
                //var length = a1.Length + a2.Length;
                //var mergedArr = new int[length];
                //var index1 = 0;
                //var index2 = 0;
                //var arr1Item = a1[index1];
                //var arr2Item = a2[index2];
                //var flag = true;

                //for (int i = 0; i < length; i++)
                //{
                //    if (arr1Item < arr2Item && flag)
                //    {
                //        mergedArr[i] = arr1Item;
                //        index1++;
                //        if (index1 <= a1.Length - 1)
                //            arr1Item = a1[index1];
                //        else
                //            flag = false;
                //    }
                //    else
                //    {
                //        mergedArr[i] = arr2Item;

                //        index2++;
                //        if (index2 == a2.Length)
                //            break;
                //        arr2Item = a2[index2];
                //    }
                //}
                //return mergedArr;
                var length = a1.Length + a2.Length;
                var mergedArr = new int[length];
                var index1 = 0;
                var index2 = 0;
                var flag = true;

                for (int i = 0; i < length; i++)
                {
                    if (a1[index1] < a2[index2] && flag)
                    {
                        mergedArr[i] = a1[index1];
                        index1++;
                        if (index1 == a1.Length)
                        {
                            index1--;
                            flag = false;
                        }


                    }
                    else
                    {
                        mergedArr[i] = a2[index2];

                        index2++;
                        if (index2 == a2.Length)
                            break;
                    }
                }
                return mergedArr;

            }
            var mergedArray = MergeSortedArrays(arr1, arr2);
            for (int i = 0; i < mergedArray.Length; i++)
            {
                Console.WriteLine(mergedArray[i]);
            }
        }
    }
}
