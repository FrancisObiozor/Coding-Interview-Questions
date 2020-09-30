// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// Ex 1
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

//Ex 2
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


var rotate = function(nums, k) {
    if(k > nums.length){
        k = k % nums.length;
    }

    if(k===0 || k === nums.length || nums.length ===  1){
        return nums;
    }

    let removed = nums.splice(nums.length - k, nums.length);
    
    let rotatedArr = [];
    for(num of removed){
        rotatedArr.push(num);
    }

    for(num of nums){
        rotatedArr.push(num);
    }

    return rotatedArr;
};




let nums1 = [1,2,3,4,5,6,7], k1 = 3

let nums2 = [-1,-100,3,99], k2 = 2

let nums = [1], k=0;


console.log(rotate(nums1, k1));
console.log(rotate(nums2, k2));
console.log(rotate(nums, k));
