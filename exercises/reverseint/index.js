// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


//SOLUTION ONE
// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join(''); // reversing a num we needed first to convert it into a string
//     if (n < 0 ){
//         return parseInt(reversed) * -1 // here because this line of code (const reversed = n.toString().split('').reverse().join('');) alwas gives us postive num so we have to multiply by -1 for negative nums
//     } 
//     return parseInt(reversed)
// }

// module.exports = reverseInt;


//SOLUTION TWO (EVEN PERFECT THAN THE ONE ABOVE)
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join(''); // reversing a num we needed first to convert it into a string
    // use sign on Math instead of the if condition// learn more about how Math.sign() works here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
    return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;

