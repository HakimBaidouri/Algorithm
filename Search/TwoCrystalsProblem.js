/**
 * Two Crystal Balls Problem
 * 
 * The two crystal balls problem is a variant of the egg drop problem. Given a building with `n` floors, 
 * you have two crystal balls and must determine the highest floor from which you can drop a ball without breaking it.
 * 
 * The naive solution is to drop a ball from every floor (O(n)), but we can optimize it using a square root approach (O(√n)).
 * 
 * Time Complexity: O(√n) in the worst case.
 * Space Complexity: O(1) since no additional memory is required.
 */

function twoCrystalBalls(breaks) {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;
    
    // Jump in sqrt(n) increments to find the range where the ball breaks
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    
    // Linear search within the identified range
    i -= jumpAmount;
    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    
    return -1; // No breaking point found
}

// Example Usage
const building = new Array(100).fill(false);
building[67] = true; // The crystal ball breaks at floor 67
console.log(twoCrystalBalls(building)); // Output: 67