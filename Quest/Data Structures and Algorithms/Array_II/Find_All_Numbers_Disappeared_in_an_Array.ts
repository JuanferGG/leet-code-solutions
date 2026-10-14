//? Given an array nums of n integers where nums[i] is in the range [1, n],
//? return an array of all the integers in the range [1, n] that do not appear in nums.

//? Example 1:
//? Input: nums = [4,3,2,7,8,2,3,1]
//? Output: [5,6]

//? Example 2:
//? Input: nums = [1,1]
//? Output: [2]

function findDisappearedNumbers(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const lastNum = nums.length;

  const createRange = (x: number, y: number) =>
    Array.from({ length: y - x + 1 }, (_, i) => x + i);

  const newRange = createRange(1, lastNum);

  const numsSet = new Set(nums);
  // console.log(numsSet)

  const missNumbers = newRange.filter((n) => !numsSet.has(n));

  return missNumbers;
}

const nums_1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums_1));

const nums_2 = [1, 1];
console.log(findDisappearedNumbers(nums_2));
