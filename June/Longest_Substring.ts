//? Given a string s, find the length of the longest substring without duplicate characters.

//? Example 1:
//? Input: s = "abcabcbb"
//? Output: 3
//? Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

//? Example 2:
//? Input: s = "bbbbb"
//? Output: 1
//? Explanation: The answer is "b", with the length of 1.

//? Example 3:
//? Input: s = "pwwkew"
//? Output: 3
//? Explanation: The answer is "wke", with the length of 3.
//? Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
//? The above solution has a time complexity of O(n^2) due to the nested loops and the includes method.

function lengthOfLongestSubstring(s: string) : number {
    let maxLength = 0
    
    for (let i = 0; i < s.length; i++){
        let current = ""

        for (let j = i; j < s.length; j++){
            if (current.includes(s[j])){
                break
            }

            current += s[j]
        }

        maxLength = Math.max(maxLength, current.length)
    }
    return maxLength
};


const str1 = "abcabcbb"
console.log(lengthOfLongestSubstring(str1));

const str2 = "bbbbb"
console.log(lengthOfLongestSubstring(str2));

const str3 = "pwwkew"
console.log(lengthOfLongestSubstring(str3));


//? The above solution has a time complexity of O(n). due to the nested loops and the includes method.
//! function lengthOfLongestSubstring(s: string): number {
//!   let left = 0;
//!   let maxLength = 0;
//!   const seen = new Set<string>();

//!   for (let right = 0; right < s.length; right++) {
//!     while (seen.has(s[right])) {
//!       seen.delete(s[left]);
//!       left++;
//!     }

//!     seen.add(s[right]);
//!     maxLength = Math.max(maxLength, right - left + 1);
//!   }

//!   return maxLength;
//! }