function merge(arr1, arr2) {
    // compare first values and merge into 1 array to be returned
    const results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

function mergeSort(array) {
    // split down into groups to run merge on
    if (array.length <= 1) return array;

    const midIdx = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0,midIdx));
    const right = mergeSort(array.slice(midIdx));
    
    return merge(left, right);
}

module.exports = { merge, mergeSort};