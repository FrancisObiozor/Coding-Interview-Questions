// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Ex 1
// Input: [2,2,1]
// Output: 1

//Ex 2
// Input: [4,1,2,1,2]
// Output: 4

var singleNumber = function(nums) {
let single ={};
for(num of nums){
    if(!single[num]){
        single[num] = 1;
    }else{
        single[num]++;
    }
}

for(num in single){
    if(single[num]===1){
        return num;
    }
}
};


let nums1 = [2,2,1]

let nums2 = [4,1,2,1,2]

console.log(singleNumber(nums1));
console.log(singleNumber(nums2));

