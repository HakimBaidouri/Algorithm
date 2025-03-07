/**
 * Linear Search Algorithm
 * 
 * Linear search is a simple searching algorithm that checks each element in an array
 * one by one until the desired element is found or the entire array has been traversed.
 * 
 * Time Complexity: O(n) in the worst and average cases, where n is the number of elements.
 * Space Complexity: O(1) since no additional memory is required.
 */

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example Usage
const numbers = [10, 20, 30, 40, 50, 60];
console.log(linearSearch(numbers, 30)); // Output: 2
console.log(linearSearch(numbers, 100)); // Output: -1