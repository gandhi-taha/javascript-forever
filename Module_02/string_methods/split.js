// split(): The split method splits a string at a specified place.
let string = 'JavaScipt-Forever'
console.log(string.split())     // ["JavaScript-Forever"]
console.log(string.split('-'))  // ["JavaScript", "Forever"]
let firstName = 'Taha'
console.log(firstName.split())  // ["Taha"]
console.log(firstName.split(''))  // ["T", "a", "h", "a"]
let countries = 'India, UK, Norway, Denmark, and USA'
console.log(countries.split(',')) // ["India", " UK", " Norway", " Denmark", " and USA"]
console.log(countries.split(', '))   //  ["India", "UK", "Norway", "Denmark", "and USA"]