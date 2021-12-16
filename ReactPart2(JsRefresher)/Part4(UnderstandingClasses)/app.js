class Human {
    constructor(gender){
        this.gender = gender;
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor(gender){
        super(gender)
        this.name = 'Max';
    }
    printMyName(){
        console.log(this.name,'and', this.gender);
    }
}

const person = new Person('Male')
person.printMyName()
person.printGender()
