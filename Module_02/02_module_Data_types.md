<div align="center">
<h1> Javasript Forever: Module 02 - Data Types </h1>
 <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/taha-gandhi-5525b1160/">
  <img alt="Linkedin Follow" src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/gandhi_taha">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/gandhi_taha?style=social">
  </a>
  </div>
<br>

[<< Module 01](../README.md)| [Module 03 >>](../03_module_Booleans_operators_date/03_booleans_operators_date.md)
<br>

- [Module 02](#-module-02)
  - [Data Types](#data-types)
    - [Primitive Data Types](#primitive-data-types)
    - [Non-Primitive Data Types](#non-primitive-data-types)
  - [Numbers](#numbers)
    - [Declaring Number Data Types](#declaring-number-data-types)
    - [Math Object](#math-object)
      - [Random Number Generator](#random-number-generator)
  - [Strings](#strings)
    - [String Concatenation](#string-concatenation)
      - [Concatenating Using Addition Operator](#concatenating-using-addition-operator)
      - [Long Literal Strings](#long-literal-strings)
      - [Escape Sequences in Strings](#escape-sequences-in-strings)
      - [Template Literals (Template Strings)](#template-literals-template-strings)
    - [String Methods](#string-methods)
  - [Checking Data Types and Casting](#checking-data-types-and-casting)
    - [Checking Data Types](#checking-data-types)
    - [Changing Data Type (Casting)](#changing-data-type-casting)
      - [String to Int](#string-to-int)
      - [String to Float](#string-to-float)
      - [Float to Int](#float-to-int)
  - [Day 2: Exercises](#-day-2-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercises: Level 3](#exercises-level-3)

# Module 02

## Data Types

In the previous section, we mentioned a bit about data types. Values or Data have data types.
Data types describe the characteristics of data. Data types can be divided into two:

1. Primitive data types
2. Non-primitive data types(Object References)

### Primitive Data Types

Primitive data types in JavaScript include:

 1. Numbers - Integers, floats
 2. Strings - Any data under single quote, double quote or backtick quote
 3. Booleans - true or false value
 4. Null - empty value or no value
 5. Undefined - a declared variable without a value

Non-primitive data types in JavaScript includes:

1. Objects
2. Functions
3. Arrays

Now, let us see what exactly primitive and non-primitive data types mean.
*Primitive* data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it.

**Example:**

```js
let word = 'JavaScript'
```

If we try to modify the string stored in variable *word*, JavaScript should raise an error. Any data type under a single quote, double quote, or backtick quote is a string data type.

```js
word[0] = 'Y'
```

This expression does not change the string stored in the variable *word*. So, we can say that strings are not modifiable or in other words immutable.
Primitive data types are compared by its values. Let us compare different data values. See the example below:

```js
let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false
```

### Non-Primitive Data Types

*Non-primitive* data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created.
Let us see by creating an array. An array is a list of data values in a square bracket. Arrays can contain the same or different data types. Array values are referenced by their index. In JavaScript array index starts at zero. I.e., the first element of an array is found at index zero, the second element at index one, and the third element at index two, etc.

```js
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
```

As you can see, an array, which is a non-primitive data type is mutable. Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.

```js
let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums == numbers)  // false

let userOne = {
name:'Taha Gandhi',
role:'Dev',
country:'India'
}

let userTwo = {
name:'Taha Gandhi',
role:'Dev',
country:'India'
}

console.log(userOne == userTwo) // false
```

Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects.
Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

```js
let nums = [1, 2, 3];
let numbers = nums;

console.log(nums == numbers)  // true

let userOne = {
name:'Taha Gandhi',
role:'Dev',
country:'India'
}

let userTwo = userOne;

console.log(userOne == userTwo)  // true
```

If you have a hard time understanding the difference between primitive data types and non-primitive data types, you are not the only one. Calm down and just go to the next section and try to come back after some time. Now let us start the data types by number type.


## Numbers

Numbers are integers and decimal values which can do all the arithmetic operations.
Here are some examples of Numbers.

### Declaring Number Data Types

```js
let age = 35;
const gravity = 9.81;  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72;        // mass in Kilogram
const PI = 3.14;      // pi a geometrical constant

// More Examples
const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37;      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```

### Math Object

In JavaScript the Math Object provides a lots of methods to work with numbers.

```js
const PI = Math.PI;

console.log(PI);                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI));                // 3 to round values to the nearest number

console.log(Math.round(9.81));              // 10

console.log(Math.floor(PI));                // 3 rounding down

console.log(Math.ceil(PI));                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10));      // 10

//Square root
console.log(Math.sqrt(100));     // 10

console.log(Math.sqrt(2));       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2));    // 9

console.log(Math.E);             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2));      // 0.6931471805599453
console.log(Math.log(10));      // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
```

#### Random Number Generator

The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999...

```js
let randomNum = Math.random(); // generates 0 to 0.999...
```

Now, let us see how we can use random() method to generate a random number between 0 and 10:

```js
let randomNum = Math.random();         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen);         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor);    // this gives between 0 and 10
```

## Strings

Strings are texts, which are under **_single_**  , **_double_**, **_back-tick_** quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote.
Let's see some examples of strings:
JavaScript
```js
let space = ' '           // an empty space string
let firstName = 'Taha';
let lastName = 'Gandhi';
let country = 'India';
let language = '';
let job = 'Dev';
let quote = "The saying,'Seeing is Believing' is not correct in 2021.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2021.`;
```

### String Concatenation

Connecting two or more strings together is called concatenation.
Using the strings declared in the previous String section:

```js
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
```

```sh 
Taha Gandhi
```


We can concatenate strings in different ways.

#### Concatenating Using Addition Operator

Concatenating using the addition operator is an old way. This way of concatenating is tedious and error-prone. It is good to know how to concatenate this way, but I strongly suggest to use the ES6 template strings (explained later on).

```js
// Declaring different variables of different data types
let space = ' '
let firstName = 'Taha'
let lastName = 'Gandhi'
let country = 'India'
let language = 'JavaScript'
let job = 'Dev'
let age = 250


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)
```

```sh
Taha Gandhi. I am 250. I live in India
```

#### Long Literal Strings

A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character **( \\ )** at the end of each line to indicate that the string will continue on the next line.


**Example:**

```js
const paragraph = "My name is Taha Gandhi. I live in India.\
Fullstack Developer| Entrepreneur| Penetration-Tester| Instructor. I teach HTML, CSS, JavaScript, React, Redux,Angular, \
Node.js, Python, Data Analysis, D3.js and training in Cyber sec for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the Javascript-Forever challenge and \
I hope you are enjoying too."

console.log(paragraph)
```



