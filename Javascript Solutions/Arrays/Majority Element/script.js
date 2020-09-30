// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Ex 1
// Input: [3,2,3]
// Output: 3

//Ex 2
// Input: [2,2,1,1,1,2,2]
// Output: 2


// var majorityElement = function(nums) {
//     let temp =[];
// 	if(nums.length ==1){
// 		return nums[0];
// 	}

//     for(let i = 0;i<nums.length;i++){
// 		if(!temp[nums[i]]){
// 			temp[nums[i]] = 1;
// 		}else{
// 			temp[nums[i]]++;
// 		}

// 		if(temp[nums[i]]>nums.length/2.0){
// 			return nums[i];
// 		}
// 	}

// };

var majorityElement = function(nums) {
    let temp =[];
	if(nums.length ==1){
		return nums[0];
	}
    for(num of nums){
		if(!temp[num]){
			temp[num] = 1;
		}else{
			temp[num]++;
		}

		if(temp[num]>nums.length/2.0){
			return num;
		}
	}
};




let set1 = [3,2,3];
let set2 = [2,2,1,1,1,2,2];
let set3 = [1];

console.log(majorityElement(set1));
console.log(majorityElement(set2));
console.log(majorityElement(set3));
