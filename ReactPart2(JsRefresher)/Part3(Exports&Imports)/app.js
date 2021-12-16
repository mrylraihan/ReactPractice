import { Person } from './app2.js'
import fnc from './app3.js'
import { stats } from './app4.js';

const p1 = new Person('Wallie', '30', 'Yemen')

console.log(p1.name);

p1.greet()
p1.greetAr()

fnc(p1)

console.log(stats.team);