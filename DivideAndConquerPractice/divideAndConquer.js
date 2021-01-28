/* Given an array of 1s and 0s which has all 1s first followed by 0s
    returns the number of zeroes in the array
    Contraints: Time Complexity O(log n)  */
function countZeroes(arr) {
    let startingLocationForCount;

    function findStartCountLocation(lowIdx = 0, highIdx = arr.length -1) {
        if (highIdx >= lowIdx) {
            let midIdx = lowIdx + Math.floor((highIdx-lowIdx) / 2);
            if (arr[midIdx] === 1) {
                // if the middle number equals 1, move to assess right half
                findStartCountLocation(midIdx + 1, highIdx);
            } else if (arr[midIdx] === 0 && (arr[midIdx - 1] === 1 || midIdx === 0)) {
                /* if this index is 0 and there is a 1 left of it, or if it is at index
                    of 0, then this is the start of where to begin counting */
                startingLocationForCount = midIdx;
            } else {
                /* midIdx must be 0 and not be our desired starting location for counting,
                    therefore we will move to assessing the left half */
                findStartCountLocation(lowIdx, midIdx - 1);
            }
        } else if (highIdx < lowIdx) {
            startingLocationForCount = -1
        }
    }

    findStartCountLocation();

    let totalZeroCount;
    if (startingLocationForCount === -1) {
        totalZeroCount = 0;
    } else {
        totalZeroCount = arr.length - startingLocationForCount;
    }

    return totalZeroCount;
}



// /* Given a sorted array and a number counts the occurrences
//     of the number in the array 
//     Constraints: Time Complexity O(log N) */
// function sortedFrequency(arr, num) {

// }

// // tests/examples
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1


// /* Accepts a rotated array of sorted numbers and an integer returns the index
//     of the num in the array.  If the value is not found, returns -1.
//     Constraints: Time Complexity O(log N) */
// function findRotatedIndex(arr, int) {

// }

// // tests/examples
// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1



// /* Accepts an array of distinct numbers sorted in increasing order.  The array has been rotated
//     counter-clockwise n number of times.  Given such an array, find the value of n.
//     Constraints: Time Complexity O(log N) */
// function findRotatedCount(arr) {

// }

// // tests/examples
// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0



// /* Accepts a sorted array and a value x, and returns the floor of x in the array.  The floor
//     of x in an array is the largest element in the array which is smaller than or equal
//     to x.  If the floor does not exist, -1 is returned.
//     Constraints: Time Complexity O(log N) */
// function findFloor(arr, num) {

// }
// // tests/examples
// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

module.exports = { countZeroes }