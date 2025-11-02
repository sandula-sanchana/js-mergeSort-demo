function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftSorted = mergeSort(arr.slice(0, mid));
    const rightSorted = mergeSort(arr.slice(mid));

    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    const result = [];

}
