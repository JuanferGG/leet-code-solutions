//? Given a binary array nums, return the maximum number of consecutive 1's in the array.

//? Example 1:
//? Input: nums = [1,1,0,1,1,1]
//? Output: 3
//? Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

//? Example 2:
//? Input: nums = [1,0,1,1,0,1]
//? Output: 2

function findMaxConsecutiveOnes(nums: number[]): number {
  let maxLenght = 0;
  let count = 0;

  nums.forEach((e) => {
    if (e === 1) {
      count++;
      if (count > maxLenght) {
        maxLenght = count;
      }
    } else {
      count = 0;
    }
  });

  return maxLenght;
}

const nums1 = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums1));

const nums2 = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums2));
