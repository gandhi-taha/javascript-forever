// Declaring different variables of different data types
let space = ' '
let firstName = 'Taha'
let lastName = 'Gandhi'
let country = 'India'
let city = 'Mumbai'
let language = 'JavaScript'
let job = 'Devops+(Teaching)'
// Concatenating using addition operator
let fullName = firstName + space + lastName // concatenation, merging two string together.
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log(personInfoOne)
// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I do work as ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)