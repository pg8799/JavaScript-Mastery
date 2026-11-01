// Lesson: filter keeps elements whose callback is truthy.
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((number) => number % 2 === 0);
console.log(evens); // [2, 4]
// Exercise: Filter numbers greater than 10.
