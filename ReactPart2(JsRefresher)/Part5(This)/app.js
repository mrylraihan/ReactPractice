const test = {name: 'test'}

test.regular = function(){
    console.log(this);
}
test.regular()//test is logged this points to the object that called it

test.arrow = ()=> console.log(this);

test.arrow()//window this in a arrow function doesnt point to the object calling it 


// ---------------------------->
// method in an object
const test2 = {
    name: 'test2',
    regular: function(){
        console.log(this);
    },
    arrow:()=> console.log(this)
}

test2.regular()//this point to the object 

test2.arrow()// point to the window 


// ------------------------------->
// While in a Constructor

function TestC(n){
    this.name = n
    this.regularTest = function(){
        console.log('Reg function test in constructor', this.name);
    }
    this.arrowTest= ()=> console.log('Arrow funciton test in constructor', this.name)
    
}

const constTest1 = new TestC('Wallie')
// while in a constructor the arrow and regulkar function both point to the object
constTest1.regularTest()
constTest1.arrowTest()
