//? You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately,
//? due to some error, one of the numbers in s got duplicated to another number in the set,
//? which results in repetition of one number and loss of another number.

//? You are given an integer array nums representing the data status of this set after the error.

//? Find the number that occurs twice and the number that is missing and return them in the form of an array.

//? Example 1:
//? Input: nums = [1,2,2,4]
//? Output: [2,3]

//? Example 2:
//? Input: nums = [1,1]
//? Output: [1,2]

function findErrorNums(nums: number[]): number[] {
    nums.sort((a, b) => a - b) 
    const correctArr = nums.map((e, i) => i + 1).sort((a, b) => a - b)
    
    for (const num in nums) {
        if (nums[num] !== correctArr[num]){
            return [nums[num], correctArr[num]]
        }
    }

  return [];
}

// function findErrorNums2(nums: number[]): number[] {
//   const map = new Map<number, number>();

//    Contar cuántas veces aparece cada número
//   for (const num of nums) {
//     map.set(num, (map.get(num) ?? 0) + 1);
//   }

//   let duplicate = 0;
//   let missing = 0;

//   /Los números correctos deben ser 1 ... n
//   for (let i = 1; i <= nums.length; i++) {
//     const count = map.get(i);

//     if (count === 2) {
//       duplicate = i;
//     }

//     if (count === undefined) {
//       missing = i;
//     }
//   }

//   return [duplicate, missing];
// }

const nums1 = [1, 2, 2, 4];
console.log(findErrorNums(nums1));

const nums2 = [1,1]
console.log(findErrorNums(nums2))
