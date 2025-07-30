// function birthdayCakeCandles(candles) {
//     // Write your code here
//     let result = 0;
//     let count = 0;
    
//     for (let i = 0 ; i < candles.length ; i++){
//         if(result < candles[i]){
//             result = candles[i]
//         }
    
//     }
    
    
//     for(let j = 0 ; j < candles.length ; j++){
//         if(result === candles[j]){
//             count++
//         }
//     }
// console.log(count);
//     return count;
// }

// birthdayCakeCandles([3, 2, 1, 3]); // Output: 2

// function timeConversion(s) {
//     // Write your code here
//     let time = s.split(':');
//     let hour = parseInt(time[0]);
//     let minute = time[1];
//     let second = time[2].slice(0, 2);
//     let period = time[2].slice(2);

//     if (period === 'PM' && hour < 12) {
//         hour += 12;
//     } else if (period === 'AM' && hour === 12) {
//         hour = 0;
//     }

//     console.log( `${hour.toString().padStart(2, '0')}:${minute}:${second}`);
// }
// timeConversion('12:00:00AM');

//  21/07/2025 comment 

// function shortint(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             console.log(arr.join(' ')); // Print after each shift
//             j--;
//         }
//         arr[j + 1] = key;
//     }
//     // After all shifts for the last element, print the final sorted array
//     console.log(arr.join(' '));
// }

// // Example usage:
// shortint([1, 4, 3, 5, 6, 2]);

// function shortint(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         let shifted = false;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j--;
//             console.log(arr.join(' ')); // Print after each shift
//             shifted = true;
//         }
//         arr[j + 1] = key;
//         if (!shifted) {
//             // Print if no shift happened (to match expected output lines)
//             console.log(arr.join(' '));
//         }
//     }
// }

// // Example usage:
// shortint([1, 4, 3, 5, 6, 2]);

// function insertionSort(arr) {
//     let count = 0; // Count the number of shifts
//     for (let i = 1; i < arr.length; i++) {
//         let value = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > value) {
//             arr[j + 1] = arr[j];
//             j--;
//             count++; // Increment for each shift
//         }
//         arr[j + 1] = value;
//     }
//     console.log("Total shifts:", count);
//     return count;
// }

// // Example usage:
// var ar = [4, 1, 3, 5, 6, 2];
// const sorted = insertionSort(ar);
// console.log(sorted.join(' ')); // Output: 1 2 3 4 5 6



// function quickSort(arr) {
//     function sort(left, right) {
//         if (left < right) {
//             let pivot = arr[right];
//             let i = left;
//             for (let j = left; j < right; j++) {
//                 if (arr[j] <= pivot) {
//                     [arr[i], arr[j]] = [arr[j], arr[i]];
//                     i++;
//                 }
//             }
//             [arr[i], arr[right]] = [arr[right], arr[i]];
//             sort(left, i - 1);
//             sort(i + 1, right);
//         }
//     }
//     sort(0, arr.length - 1);
//     return arr;
// }

// // Example usage:
// var ar = [4, 1, 3, 5, 6, 2];
// quickSort(ar);
// console.log(ar.join(' ')); // Output: 1 2 3 4 5 6

// function countingSort(arr) {
//     if (arr.length === 0) {
//         console.log('');
//         return [];
//     }
//     let max = Math.max(...arr);
//     let count = new Array(max + 1).fill(0);

//     for (let num of arr) {
//         count[num]++;
//     }

//     console.log(count.join(' '));
//     return count;
// }

// // Example usage:
// var ar = [63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56, 75, 52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81, 82, 24, 69, 2, 30, 61, 83, 37, 97, 16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40, 67, 94, 84, 60, 35, 58, 19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84, 33, 34, 14, 96, 7, 59, 17, 98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12, 29, 35, 80, 78, 80, 6, 5, 24, 49, 82];
// countingSort(ar);


function countingSort(arr) {
    // Always create a count array of length 100
    let count = new Array(100).fill(0);

    for (let num of arr) {
        console.log(num)
        // count[num]++;
    }

    // console.log(count.join(' '));
    // return count;
}

// Example usage:
var ar = [63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56, 75, 52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81, 82, 24, 69, 2, 30, 61, 83, 37, 97, 16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40, 67, 94, 84, 60, 35, 58, 19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84, 33, 34, 14, 96, 7, 59, 17, 98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12, 29, 35, 80, 78, 80, 6, 5, 24, 49, 82];
countingSort(ar);