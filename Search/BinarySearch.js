/**
 * Binary Search Algorithm
 * 
 * Binary search is an efficient searching algorithm that finds an element in a sorted array 
 * by repeatedly dividing the search space in half.
 * 
 * Time Complexity: O(log n) in the worst and average cases, where n is the number of elements.
 * Space Complexity: O(1) since no additional memory is required.
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Example Usage
const sortedNumbers = [10, 20, 30, 40, 50, 60];
console.log(binarySearch(sortedNumbers, 30)); // Output: 2
console.log(binarySearch(sortedNumbers, 100)); // Output: -1