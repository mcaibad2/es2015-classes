const Person = require('./person');
const ES2015Person = require('./ES2015/person');

var person = new Person("Andreas", "Daskalopoulos", 38);
console.log(person.getFullName());

person = new ES2015Person("Andreas", "Daskalopoulos", 38);
console.log(person.getFullName());