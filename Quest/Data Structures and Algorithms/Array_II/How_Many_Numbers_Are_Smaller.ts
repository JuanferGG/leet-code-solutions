//? How Many Numbers Are Smaller Than the Current Number

//? Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, 
//? for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i]

//? Return the answer in an array.


//? Example 1:
//? Input: nums = [8,1,2,2,3]
//? Output: [4,0,1,1,3]
//? Explanation: 
//? For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
//? For nums[1]=1 does not exist any smaller number than it.
//? For nums[2]=2 there exist one smaller number than it (1). 
//? For nums[3]=2 there exist one smaller number than it (1). 
//? For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

//? Example 2:
//? Input: nums = [6,5,4,8]
//? Output: [2,1,0,3]

//? Example 3:
//? Input: nums = [7,7,7,7]
//? Output: [0,0,0,0]


function smallerNumbersThanCurrent(nums: number[]): number[] {
    const endArr = []
    
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            // console.log(`es i > j: ${nums[i]} > ${nums[j]} ${nums[i] > nums[j]}`);      
            if (nums[i] > nums[j]){
                count++
            }
        }
        endArr.push(count)
    }


    return endArr
};

function smallerNumbersThanCurrent_2(nums: number[]): number[]{
    const mapArr = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        mapArr.set(i, mapArr.get(i) ?? 0)   
    }


    return []
}

const nums_1 = [8,1,2,2,3]
console.log(smallerNumbersThanCurrent(nums_1));

const nums_2 = [6,5,4,8]
console.log(smallerNumbersThanCurrent(nums_2));

const nums_3 = [7,7,7,7]
console.log(smallerNumbersThanCurrent(nums_3));

const nums_4 = [1,31,60,9,27,43,27,37,36,59,59,89,71,73,91,65,26,89,59,48,10,93,3,9,38,92,79,57,26,92,37,53,23,82,
    77,85,50,48,93,59,28,31,63,1,37,34,60,63,45,96,14,75,92,88,85,96,15,27,88,57,49,27,53,7,93,22,97,89,87,49,54,
    47,67,18,8,65,91,20,5,74,99,27,97,64,69,92,59,83,39,38,60,17,2,90,57,55,85,86,74,44,55,91,46,27,98,34,26,85,
    59,73,60,34,87,79,53,36,35,56,8,14,41,57,87,86,36,66,29,65,40,31,19,20,32,90,31,52,3,86,54,50,28,17,9,10,21,
    59,77,93,48,28,37,77,50,34,1,36,19,15,94,55,36,94,85,38,88,53,70,7,84,95,87,19,12,98,21,66,62,55,14,7,45,82,
    40,39,4,39,57,4,44,36,71,80,27,33,95,35,21,36,65,43,71,11,89,4,16,16,49,41,43,60,21,37,3,96,33,2,69,81,78,
    72,2,53,69,59,98,3,79,65,49,13,15,73,72,2,49,11,63,27,45,74,4,52,60,69,40,24,1,16,60,60,32,55,80,65,12,53,
    57,70,66,37,100,11,6,54,19,44,99,25,10,58,46,14,75,77,42,84,12,26,77,40,20,20,42,98,10,26,95,37,71,74,8,
    62,72,59,64,56,49,46,66,98,81,67,60,22,86,18,0,22,39,22,83,81,19,26,99,17,88,31,58,17,10,62,64,70,49,50,78,
    81,95,54,69,82,64,87,87,55,60,35,61,16,85,84,25,48,4,35,78,100,17,56,27,19,49,56,80,86,7,44,90,28,85,19,36,
    75,99,87,72,99,62,42,19,76,81,92,8,84,79,50,85,9,9,0,3,85,9,11,16,70,32,7,26,55,43,87,35,84,45,25,87,20,52,10,
    45,14,54,57,42,64,13,1,84,7,18,52,98,76,91,27,25,8,85,20,58,65,3,41,89,79,37,84,39,100,19,57,6,5,36,20,97,3,79,40,
    3,18,32,13,29,32,100,83,73,63,63,24,9,16,36,3,82,30,20,98,86,22,31,75,78,58,13,0,25,72,46,83,81,21,34,12,10,38,29,48,38,69,17,38,17,38,68,15,38,66,12,98,97,26,56,51,81,96]
console.log(smallerNumbersThanCurrent);