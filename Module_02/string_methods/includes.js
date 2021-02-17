// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
let string = 'JavaScript-Forever'
console.log(string.includes('Fore'))     // true
console.log(string.includes('more'))     // false
console.log(string.includes('Script'))     // true
console.log(string.includes('script'))     // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'India'
console.log(country.includes('ind')) // false
console.log(country.includes('Ind')) // true
console.log(country.includes('dia')) // true
console.log(country.includes('Dia')) // false