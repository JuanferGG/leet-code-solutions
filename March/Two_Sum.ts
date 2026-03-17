//? Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//? You may assume that each input would have exactly one solution, and you may not use the same element twice.
//? You can return the answer in any order.

//? Example 1:
//? Input: nums = [2,7,11,15], target = 9
//? Output: [0,1]
//? Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//? Example 2:
//? Input: nums = [3,2,4], target = 6
//? Output: [1,2]

//? Example 3:
//? Input: nums = [3,3], target = 6
//? Output: [0,1]
//? Constraints:

//? 2 <= nums.length <= 104
//? -109 <= nums[i] <= 109
//? -109 <= target <= 109
//? Only one valid answer exists.


//? Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?

const nums = [2, 7, 11, 15]
const target = 9

const nums2 = [3,2,4]
const target2 = 6

const nums3 = [3,3]
const target3 = 6

//! Approach 1: Brute Force
function twoSum(nums: number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // console.log(nums[i] ,"+", nums[j])
            if ((nums[i] + nums[j]) === target) {
                // console.log(i ,"+", j , "=", nums[i] + nums[j])
                return console.log([i, j])
            }
        }
    }
    return []
};

const startTime = performance.now()
twoSum(nums, target)
twoSum(nums2, target2)
twoSum(nums3, target3)
const endTime = performance.now()
console.log(`Time total execution: ${endTime - startTime} milliseconds`)


//! Approach 2: Two-pass Hash Table

function twoSum2(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map()
    for (let i = 0; i < nums.length; i++){
        // console.log("First pass: ", nums[i], "at index", i)
        map.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        // console.log("Second pass: ", nums[i], "at index", i, "complement:", complement)
        if (map.has(complement) && map.get(complement) !== i) {
            console.log([i, map.get(complement)])
            return [i, map.get(complement)!]
        }
    }
    return []
}

const startTime2 = performance.now()
twoSum2(nums, target)
twoSum2(nums2, target2)
twoSum2(nums3, target3)
const endTIme2 = performance.now()
console.log(`Time total execution: ${endTIme2 - startTime2} milliseconds`)



//! Approach 3: One-pass Hash Table