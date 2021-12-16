// Spread and Rest Operator (...)
// Spread is used to split up an array or object 
const oldArray = [1,2,3]
const newArray = [...oldArray, 4,5]

console.log(newArray);

const oldObject = {name:'Old'}
const newObject = {...oldObject, newName:'New'}

console.log(newObject);

// Rest Operator
const sumUp = (...a)=>{
    let total = 0
    a.forEach(ele=>{
        total+=ele
    })
    return total
}

console.log(sumUp(1,2,3,4, 5, 6, 7, 8))