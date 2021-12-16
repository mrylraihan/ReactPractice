class Human {
        gender = 'Male';
    printGender= ()=>{
        console.log(this.gender);
    }
}

class Person extends Human {
        name = 'Max';
         gender = 'Female';
    printMyName=()=>{
        console.log(this.name,'and', this.gender);
    }
}

const person = new Person('Male')
person.printMyName()
person.printGender()
