/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestCandidate = 0) {
  if (idx === words.length) return longestCandidate;
  if (words[idx].length > longestCandidate) {
    longestCandidate = words[idx].length;
  }
  return longest(words, idx + 1, longestCandidate);
}


/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, acc = "") {
  if (idx >= str.length) return acc;
  acc += str[idx];
  return everyOther(str, idx + 2, acc);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = str.length - 1, acc = "") {
  if (idx < 0) return acc === str;
  acc += str[idx];
  return isPalindrome(str, idx - 1, acc);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1, acc = "") {
  if (idx < 0) return acc;
  acc += str[idx];
  return revString(str, idx -1, acc);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let acc = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") acc.push(obj[key]);
    if (typeof obj[key] === "object") acc.push(...gatherStrings(obj[key]));
  }
  return acc;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present).
 * This algorithm should run in O(log(N)) time */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length) {
  if (leftIdx > rightIdx) return -1;
  
  let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
  
  if (arr[middleIdx] === val) return middleIdx;

  if (arr[middleIdx] > val) return binarySearch(arr, val, leftIdx, middleIdx - 1);

  return binarySearch(arr, val, middleIdx + 1, rightIdx);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
