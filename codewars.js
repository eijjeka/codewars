// Digital root is the recursive sum of all the digits in a number.

//     Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//     Examples
//         16  -->  1 + 6 = 7
//        942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//     132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//     493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//     function digital_root(n) {
//         let quantity = 0;
//        String(n).split('').map(el => {
//                 quantity += Number(el)
//             });
//         return quantity >= 10? digital_root(quantity) : quantity
//     }

//     digital_root(12131245308289)


//     function digital_root(n) {
//       return (n - 1) % 9 + 1;
//     }

//     function digital_root(n) {
//       if (n < 10) return n;
  
//       return digital_root(
//         n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
//     }







// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function sortString(str) {
//     if (str === '') {
//         return ''
//     }
//    return str.split(' ').sort((a, b) => a.match(/(\d+)/)[0] - b.match(/(\d+)/)[0])
// }

// sortString("is2 Thi1s T4est 3a")




// function findShort(s) {
//     s = s.split(' ').sort((a, b) => a.length - b.length )
//     return s[0].length
//     // console.log(s)
//     // let result = s[0].length
//     // console.log(`result ${result}`)
//     // for (let i = 1; i <= s.length; i += 1) {
//     //     let lengthStr = s[i].length
//     //     console.log(lengthStr)
//     //     if (lengthStr < result) {
//     //         result = lengthStr
//     //     }
//     // }
//     // console.log(result)
//     // return result
// }

// findShort("bitcoin take over the world maybe who knows perhaps")




// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// function findOutlier(integers) {
//     let odd = [];
//     let event = [];
//     integers.map(el => {
//         el % 2 === 0 ? event.push(el) : odd.push(el);
//     })
//    return odd.length === 1 ? odd[0] : event[0];
// }





                                                        // Не решено!
// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// function findMissingLetter(array){
//     const leters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     const startValue = leters.indexOf(array[0].toLowerCase());
//     const arr = []
//     array.map(el => {
//         for (let i = startValue; i < leters.length; i += 1) {
//             if (el.toLowerCase() !== leters[i]) {
//                 return
//             }
//             console.log(leters[i])
//         }
//     })
//     return arr
//         // array.map(el => {
//         //     if (leters[i] !== el.toLowerCase()) {
//         //         console.log(leters[i]);
//         //     }
//         // })
// }



// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// const uniqueInOrder = iterable => Array.from(new Set(iterable));
// const uniqueInOrder = iterable => {
//     let result = [];
//     for (let i = 0; i < iterable.length; i += 1) {
//         if (iterable[i] !== iterable[i + 1]) {
//             result.push(iterable[i])
//         }
//     }
//     return result
// };

// var uniqueInOrder=function(iterable){
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }




// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// function rowSumOddNumbers(n) {
//     let result = [];
//     for (i = 0; i <= n; i += 1) {
//         result.push(i)
//     }
//     return result.reduce((a,b) => a + b)
// }




// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
// Note for Go
// For Go: Empty string slice is expected when there are no anagrams found.

// #my
// const anagrams = (word, words) => {
//     const result = []
//     let sortElOrArray = el.split('').sort().join('');
//     words.map(el => {
//         let sortWord = word.split('').sort().join('');
//         sortWord === sortElOrArray ? result.push(el) : false 
//     })
//     return result
// }

// #1
// String.prototype.sort = function() {
//   return this.split("").sort().join("");
// };

// function anagrams(word, words) {
//   return words.filter(function(x) {
//       return x.sort() === word.sort();
//   });
// }

// #2
// function anagrams(word, words) {
//   word = word.split('').sort().join('');
//   return words.filter(function(v) {return word == v.split('').sort().join('');});
// }

// #3
// let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join('')); супер!!!!!!

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
anagrams('laser', ['lazing', 'lazy', 'lacer']);
