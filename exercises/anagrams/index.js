// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanStringUp(stringA) === cleanStringUp(stringB)
}

function cleanStringUp(str){
    // replace() removes pancutuations and spaces
    // split() makes a string into an array, and we had to do it cuz sort() is an array method
    // join() takes back an arry back to string
    return str.replace(/[^\w]/g, '').split('').sort().join('');
}

module.exports = anagrams;
