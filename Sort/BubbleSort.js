/**
 * Bubble Sort Algorithm
 * 
 * Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, 
 * compares adjacent elements, and swaps them if they are in the wrong order.
 * 
 * Time Complexity: O(n²) in the worst and average cases, O(n) in the best case (already sorted input).
 * Space Complexity: O(1) as sorting happens in place.
 */

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
                swapped = true;
            }
        }
        n--; // Reduce the range of iteration after each pass
    } while (swapped);
    return arr;
}

// Example Usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers)); // Output: [11, 12, 22, 25, 34, 64, 90]