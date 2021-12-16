const numbers = [1,2,3,4,5]

// Map
const doubleNumArray = numbers.map(num=>num*num)

console.log(numbers);//[1, 2, 3, 4, 5]
console.log(doubleNumArray);//[1, 4, 9, 16, 25]


const numwithText = numbers.map(num=>`the number is ${num}`)

console.log(numwithText);//['the number is 1', 'the number is 2', 'the number is 3', 'the number is 4', 'the number is 5']


// filter

const filteredEvenArray = numbers.filter(num=>num%2===0)

console.log(filteredEvenArray);//[2, 4]

const filteredOddArray = numbers.filter(num=>num%2===1)

console.log(filteredOddArray);//[1, 3, 5]

// reduce

const reducedArray = numbers.reduce((preV, curV)=> curV+=preV, 0)
console.log(reducedArray);


