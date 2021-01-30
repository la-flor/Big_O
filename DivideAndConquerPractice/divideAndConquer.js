/* Given an array of 1s and 0s which has all 1s first followed by 0s
    returns the number of zeroes in the array
    Contraints: Time Complexity O(log n)  */
function countZeroes(arr) {

    function findStartCountLocation(lowIdx = 0, highIdx = arr.length -1) {
        if (highIdx >= lowIdx) {
            // find the middle index which is the subject
            let midIdx = lowIdx + Math.floor((highIdx-lowIdx) / 2);
            if (arr[midIdx] === 1) {
                // if the middle (subject) number equals 1, move to assess right half
                return findStartCountLocation(midIdx + 1, highIdx);
            } else if (arr[midIdx] === 0 && (arr[midIdx - 1] === 1 || midIdx === 0)) {
                /* if the middle (subject) value === 0 and there is a 1 left of it, or if it is at index
                    of 0, then this is the start of where to begin counting */
                return midIdx;
            } else {
                /* midIdx must be 0 and not be our desired starting location for counting,
                    therefore we will move to assessing the left half */
                return findStartCountLocation(lowIdx, midIdx - 1);
            }
        }
        return -1
    }

    const startingIdx = findStartCountLocation();

    if (startingIdx === -1) {
        return 0;
    } else {
        return arr.length - startingIdx;
    }
}



/* Given a sorted array and a number counts the occurrences
    of the number in the array 
    Constraints: Time Complexity O(log N) */
function sortedFrequency(arr, targetNum) {
    function findStartCountIdx(lowIdx = 0, highIdx = arr.length -1) {
        if (highIdx >= lowIdx) {
            // find the middle index which is the subject
            let midIdx = Math.floor((highIdx + lowIdx) / 2);
            if (arr[midIdx] < targetNum) {
                // if the middle (subject) value < target number, move to assess right half
                return findStartCountIdx(midIdx + 1, highIdx);
            } else if (arr[midIdx] === targetNum && (arr[midIdx - 1] < targetNum || midIdx === 0)) {
                /* if the middle (subject) value is the target num and the value left of it is > than the target val,
                 or if it is at index of 0, then this is the start of where to begin counting */
                return midIdx;
            } else {
                /* midIdx must be 0 and not be our desired starting Idx for counting,
                    therefore we will move to assessing the left half */
                return findStartCountIdx(lowIdx, midIdx - 1);
            }
        }
        return -1
    }

    const startingIdx = findStartCountIdx();

    if (startingIdx === -1) {
        /* if there is no startingIdx, the target num is not present 
            in the array, so return quantity of 0 */
        return 0;
    }

    function findEndCountIdx(lowIdx, highIdx) {
        if (highIdx >= lowIdx) {
            // find the middle index which is the subject
            let midIdx =  Math.floor((highIdx + lowIdx) / 2);
            if (arr[midIdx] > targetNum) {
                // if the middle number is > the targetNum, move to assess left half
                return findEndCountIdx(lowIdx, midIdx - 1);
            } else if (arr[midIdx] === targetNum && (arr[midIdx + 1] > targetNum || midIdx === arr.length - 1)) {
                /* if the subject value is the same as the targetNum and the value right of it is > the targetNum, 
                    or if the index is at the end of the array, then this is the end spot for counting */
                return midIdx;
            } else {
                return findEndCountIdx(midIdx + 1, highIdx);
            }
        }
        return -1
    }

    const endingIdx = findEndCountIdx(startingIdx, arr.length -1);
    return endingIdx - startingIdx + 1;

}



/* Accepts a rotated array of sorted numbers and a target integer. Returns the index
    of the target num in the array.  If the value is not found, returns -1.
    Constraints: Time Complexity O(log N) */
function findRotatedIndex(arr, targetNum) {
    let pivot = findPivot(arr)
    if (pivot > 0 && targetNum >= arr[0] && targetNum <= arr[pivot - 1]) {
        /* identifies the target number is between idx 0 and the pivot point
            and provides that range for binarySearch */
        return binarySearch(arr, targetNum, 0, pivot - 1);
    } else {
        /* the target number is between the pivot point and the end
            of the array, so binarySearch is provided that range to look in*/
        return binarySearch(arr, targetNum, pivot, arr.length - 1);
    }
}

function binarySearch(arr, targetNum, start, end) {
    /* finds the location of the targetNum given a 
        start and end point to look between */
    if (arr.length === 0) {
        return -1;
    } 
    if (targetNum < arr[start] || targetNum > arr[end]) {
        return -1;
    }

    while (start <= end) {
        let midIdx = Math.floor((start + end) / 2);
        if (arr[midIdx] === targetNum) {
            return midIdx;
        } else if (targetNum < arr[midIdx]) {
            end = midIdx - 1;
        } else {
            start = midIdx + 1;
        }
    }
    return -1;
}

function findPivot(arr) {
    /* finds the location of the rotation point */
    if (arr[0] < arr[arr.length - 1] || arr.length === 1) {
        return 0;
    } 
    let start = 0
    let end = arr.length - 1;
    while (start <= end) {
        let midIdx = Math.floor((start + end) / 2);
        if (arr[midIdx] > arr[midIdx + 1]) {
            return midIdx + 1
        } else if (arr[start] <= arr[midIdx]) {
            start = midIdx + 1
        } else {
            end = midIdx - 1
        }
    }
}





/* Accepts an array of distinct numbers sorted in increasing order.  The array has been rotated
    counter-clockwise n number of times.  Given such an array, find the value of n.
    Constraints: Time Complexity O(log N) */
function findRotationCount(arr, lowIdx = 0, highIdx = arr.length - 1) {
    if (highIdx < lowIdx) {
        return 0;
    } else if (highIdx === lowIdx) {
        return lowIdx;
    } 

    let midIdx = Math.floor((lowIdx + highIdx) / 2)
    
    if (midIdx > lowIdx && arr[midIdx] < arr[midIdx - 1]) {
        // if the midpoint is the smallest element, this is our target sln
        return midIdx;
    }
    
    if (arr[highIdx] > arr[midIdx]) {
        // create new parameters to check left half of array
        return findRotationCount(arr, lowIdx, midIdx - 1);
    } else {
        // create new parameters to check right half of array
        return findRotationCount(arr, midIdx + 1, highIdx);
    }
}




/* Accepts a sorted array and a value x, and returns the floor of x in the array.  The floor
    of x in an array is the largest element in the array which is smaller than or equal
    to x.  If the floor does not exist, -1 is returned.
    Constraints: Time Complexity O(log N) */
function findFloor(arr, targetNum, lowIdx = 0, highIdx = arr.length -1) {
    /* if the exact target number is in the array
        we will return that as the floor value */
    // if (targetNum in arr) return targetNum;

    /* if the target number value is less than the lowest
        number in the array, return -1 */
    if (arr[lowIdx] > targetNum) return -1;
    
    /* if the array is only 1 value long (and inherintly by prior if/thens is
        not less than that value, then return the low Idx */
    if (highIdx === lowIdx) return lowIdx;

    /* if our target number is > the last number in the array
        return the last number of the array*/
    if (targetNum > arr[highIdx]) return arr[highIdx];

    let midIdx = Math.floor((lowIdx + highIdx) / 2);

    /* if the middle index is the same as the target, return the midIdx
        or, if the middle index is less than the target number and one above it is larger,
        then return the middle index because this is the floor value  */
    if (arr[midIdx] === targetNum || (arr[midIdx] < targetNum && (arr[midIdx] + 1) > targetNum)) {
        return arr[midIdx];
    } else if (arr[midIdx] > targetNum) {
        /* if the middle index is greater than the target number,
            look to the left side to find the floor value */
        return findFloor(arr, targetNum, lowIdx, midIdx - 1);
    } else {
        /* otherwise the floor value must be on the right, so
            look to the right side to find the floor value */
        return findFloor(arr, targetNum, midIdx + 1, highIdx);
    }

}

module.exports = { countZeroes, sortedFrequency, findRotatedIndex, findRotationCount, findFloor };