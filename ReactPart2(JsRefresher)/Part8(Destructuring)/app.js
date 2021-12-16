// Destructuring

const numbers = [1,2,3]

const [num1, ,num3] = numbers

console.log(num1);
console.log(num3);

const person = {name:'Wallie', age:30}

const {name:n} = person

console.log(n);