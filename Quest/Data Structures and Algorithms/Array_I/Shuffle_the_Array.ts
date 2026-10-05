//? Shuffle the Array

//? Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

//? Return the array in the form [x1,y1,x2,y2,...,xn,yn].

//? Example 1:
//? Input: nums = [2,5,1,3,4,7], n = 3
//? Output: [2,3,5,4,1,7] 
//? Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

//? Example 2:
//? Input: nums = [1,2,3,4,4,3,2,1], n = 4
//? Output: [1,4,2,3,3,2,4,1]

//? Example 3:
//? Input: nums = [1,1,2,2], n = 2
//? Output: [1,2,1,2]


function shuffle(nums: number[], n: number): number[] {
    const maxArr = nums.length
    const leftArr = nums.slice(0, n)
    const rigthArr = nums.slice(n)
    const arr: number[] = []
    
    for (let index = 0; index < n; index++) {
        arr.push(leftArr[index], rigthArr[index])
    }
    return arr
};

const nums1 = [2,5,1,3,4,7]
console.log(shuffle(nums1, 3))
//? Output: [2,3,5,4,1,7] 


const nums_2 = [1,2,3,4,4,3,2,1]
console.log(shuffle(nums_2, 4))
//? Output: [1,4,2,3,3,2,4,1]

const nums_3 = [1,1,2,2]
console.log(shuffle(nums_3, 2));
//? Output: [1,2,1,2]
