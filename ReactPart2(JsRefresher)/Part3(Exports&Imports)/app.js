import { Person } from './app2.js'
import fnc from './app3.js'

const p1 = new Person('Wallie', '30', 'Yemen')

console.log(p1.name);

p1.greet()
p1.greetAr()

fnc(p1)