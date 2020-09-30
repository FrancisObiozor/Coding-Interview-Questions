// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Ex 1
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Ex 2
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Ex 3
// Input: nums = [3,3], target = 6
// Output: [0,1]


var twoSum = function(nums, target) {
	for(let i =0; i<nums.length;i++){
		if(nums.indexOf(target-nums[i],1+i) !== -1){
			return [nums.indexOf(nums[i]), nums.indexOf(target-nums[i],1+i)];
		}
	}
};

let nums = [2,7,11,15], target = 9;
let nums2 = [3,2,4], target2 = 6;
let nums3 = [3,3], target3 = 6;

console.log(twoSum(nums, target));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));
