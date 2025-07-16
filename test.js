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

//     return `${hour.toString().padStart(2, '0')}:${minute}:${second}`;
// }
let data = '07:05:45AM';

let time = data.split(':');

console.log(time);

let hour = parseInt(time[0]);
let minn = parseInt(time[1]);
let second = parseInt(time[2].slice(0,2));
let period = time[2].slice(2);
console.log(hour, minn, second , period);