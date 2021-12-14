class Person {
    constructor(name, age, country){
        this.name = name
        this.age = age
        this.country = country
    }
    greet(){
        console.log('hey im '+ this.name);
    }
    greetAr = () => console.log('hey im '+ this.name)
}

export {
    Person
}