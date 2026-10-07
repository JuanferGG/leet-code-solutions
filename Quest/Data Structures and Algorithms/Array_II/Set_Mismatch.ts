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
  const mapNums = new Map<number, number>();

  for (const num of nums) {
    mapNums.set(num, (mapNums.get(num) ?? 0) + 1);
  }

  let duplicate = 0;
  let missing = 0;

  for (let i = 1; i <= nums.length; i++) {
    const count = mapNums.get(i);

    if (count === 2) {
      duplicate = i;
    }

    if (count === undefined) {
      missing = i;
    }
  }

  return [duplicate, missing];
}

const nums1 = [1, 2, 2, 4];
console.log(findErrorNums(nums1));

// const nums2 = [1, 1];
// console.log(findErrorNums(nums2));

// const nums3 = [3, 2, 2];
// console.log(findErrorNums(nums3));

