//? Q1. Concatenation of Array

//? Given an integer array nums of length n, you want to create an 
//? array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

//? Specifically, ans is the concatenation of two nums arrays.

//? Return the array ans.

//? Example 1:
//? Input: nums = [1,2,1]
//? Output: [1,2,1,1,2,1]
//? Explanation: The array ans is formed as follows:
//? - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
//? - ans = [1,2,1,1,2,1]

//? Example 2:
//? Input: nums = [1,3,2,1]
//? Output: [1,3,2,1,1,3,2,1]
//? Explanation: The array ans is formed as follows:
//? - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
//? - ans = [1,3,2,1,1,3,2,1]



function getConcatenation(nums: number[]): number[] {
    const newArr: number[] = []
    nums.forEach(num => {
        newArr.push(num)
    });
    nums.forEach(num => {
        newArr.push(num)
    });

    return newArr
};

//! Tambien se puede resolver de la siguiente manera:

function getConcatenation2(nums: number[]): number[] {
    return [...nums, ...nums]
}

//! ó

function getConcatenation3(nums: number[]): number[] {
    return nums.concat(nums)
}


const nums = [1,2,1]
console.log(getConcatenation(nums));


const nums2 = [1,3,2,1]
console.log(getConcatenation(nums2));