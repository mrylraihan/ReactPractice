// Primitive type

const number = 1
console.log(number);
const num2 = number
console.log(num2);

const person = {
    name:'Wallie'
}
console.log(person);//{name:"Wallie"}

const secondPerson = person

console.log(secondPerson);//{name:"Wallie"}

person.name = 'Mike'

console.log(secondPerson.name);//Mike
// this is because the reference/pointer is the same we didnt make a full copy we just copied teh reference 

//now how to make a real copy without just copying the reference
const thirdPerson = {...person}
person.name = 'Wayel'
console.log(secondPerson.name);//Wayel
console.log(thirdPerson.name);//Mike this is a real copy 
