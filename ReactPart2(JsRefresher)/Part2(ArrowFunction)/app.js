// Arrow functions
// normal js function 
function printMyName(name){
    console.log(name);
}

printMyName('wallie')

// arrow function 
const printName = name => console.log(name);

printName('Wallie')

const toy = {
    name:'Buzz',
    greet: function(){
        console.log(`${this.name} and im a toy`);
    }
}

toy.greet()

const toy1 = {
    name1:'Woody',
    greet: ()=>{
        console.log(`${this.name1} and im a toy`);
    }
}
toy1.greet()