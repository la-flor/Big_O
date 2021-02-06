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

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

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
