/**
 * Quick Sort Algorithm
 * 
 * Quick Sort is a highly efficient sorting algorithm based on the divide and conquer approach.
 * It selects a pivot element, partitions the array into elements less than and greater than the pivot,
 * and recursively sorts the partitions.
 * 
 * Time Complexity:
 * - Best/Average Case: O(n log n)
 * - Worst Case: O(n²) (when the pivot is poorly chosen)
 * Space Complexity: O(log n) due to recursive calls (in-place sorting)
 */

function quickSort(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }

    const indexPivot = partition(arr, lo, hi);

    quickSort(arr, lo, indexPivot - 1);
    quickSort(arr, indexPivot + 1, hi);
}

function partition(arr, lo, hi) {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

// Example Usage
const randomArray = [42, 7, 19, 85, 23, 4, 91, 56, 12, 33, 77, 29, 68, 3, 50, 81, 14, 99, 37, 62];
quickSort(randomArray, 0, randomArray.length - 1);
console.log(randomArray); // Output: Sorted array
