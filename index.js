// ********************************
// 1. Write a program to reverse the string: "Hello World". 

let reverseWord = 'Hello World';
console.log(reverseWord.split('').reverse().join(''));
console.log('-'.repeat(50));
// ***********************************
// 1. Make an array of your siblings' names or your favorite movie characters' names.
// 2. Make an array of your parents' names.
// 3. Combine these two arrays.
// 4. Add your pets' names.
// 5. Reverse the order of the array.
// 6. Access one of your parents' names.
// 7. Update the name of one of your parents. 

let siblings = ['Behrad', 'Behnia'];
let parents = ['Baba', 'Maman'];
let family = [...siblings, ...parents];
console.log(family);
console.log('-'.repeat(50));
family.reverse();
console.log(family);
family[0] = 'Mariam'
family[1] = 'Hamed'
console.log(family);
console.log('-'.repeat(50));