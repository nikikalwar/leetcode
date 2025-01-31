/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
const nums = [7,11,15,2];
const target = 9
console.log("heelo sum")
var twoSum = function(nums, target) {
    const arr = nums;
    const map = new Map();
    for(let i = 0; i< arr.length;i++){
       // console.log(arr[i]);
       const diff = target - arr[i];
       if(map.has(diff)){
        return [map.get(diff), i]
       }
       else {
        map.set(arr[i],i)
       }
    }
};

console.log(twoSum(nums,target))