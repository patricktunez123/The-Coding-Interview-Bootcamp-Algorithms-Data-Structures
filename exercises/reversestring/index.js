// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// // SOLUTION 1
// function reverse(str) {
//     const arr = str.split(''); // MAKE THE STRING INTO AN ARRAY SO THAT WE CAN BE ABLE TO USE REVERSE BUILT-IN FUNC
//     arr.reverse(); // CALL REVERSE ON THE ARRAY JUST TO DO THE REVERSE
//     return arr.join('') // JOIN BACK THE STRING
// }

// module.exports = reverse;


// // SOLUTION 2
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// module.exports = reverse;

// SOLUTION 3
// function reverse(str) {
//     let reversedSTR = '';
//     for (let char of str){
//         reversedSTR = char + reversedSTR;
//     }

//     return reversedSTR
// }

// module.exports = reverse;


// SOLUTION 4
function reverse(str) {
    return str.split('').reduce((rev, chr) => chr + rev, '' ) // learn how reduce works
}

module.exports = reverse;