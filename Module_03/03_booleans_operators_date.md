<div align="center">
<h1> Javasript Forever: Module 03 - Booleans, Operators, Date </h1>
<a class="header-badge" target="_blank" href="https://www.linkedin.com/in/taha-gandhi-5525b1160/">
  <img alt="Linkedin Follow" src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/gandhi_taha">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/gandhi_taha?style=social">
  </a>
  </div>
<br>

- [Module 03](#-module-03)
  - [Booleans](#booleans)
    - [Truthy values](#truthy-values)
    - [Falsy values](#falsy-values)
  - [Undefined](#undefined)
  - [Null](#null)
  - [Operators](#operators)
    - [Assignment operators](#assignment-operators)
    - [Arithmetic Operators](#arithmetic-operators)
    - [Comparison Operators](#comparison-operators)
    - [Logical Operators](#logical-operators)
    - [Increment Operator](#increment-operator)
    - [Decrement Operator](#decrement-operator)
    - [Ternary Operators](#ternary-operators)
    - [Operator Precendence](#operator-precendence)
  - [Window Methods](#window-methods)
    - [Window alert() method](#window-alert-method)
    - [Window prompt() method](#window-prompt-method)
    - [Window confirm() method](#window-confirm-method)
  - [Date Object](#date-object)
    - [Creating a time object](#creating-a-time-object)
    - [Getting full year](#getting-full-year)
    - [Getting month](#getting-month)
    - [Getting date](#getting-date)
    - [Getting module](#getting-module)
    - [Getting hours](#getting-hours)
    - [Getting minutes](#getting-minutes)
    - [Getting seconds](#getting-seconds)
    - [Getting time](#getting-time)
  - [ Module 3: Exercises](#-Module-3-exercises)
    - [Exercises: Level 1](#exercises-level-1)
    - [Exercises: Level 2](#exercises-level-2)
    - [Exercises: Level 3](#exercises-level-3)

# Module 03

A boolean data type represents one of the two values:_true_ or _false_. Boolean value is either true or false. The use of these data types will be clear when you start the comparison operator. Any comparisons return a boolean value which is either true or false.

**Example: Boolean Values**

```js
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = false
let truValue = 7 > 5    // true
let falseValue = 7 < 5  // false
```

We agreed that boolean values are either true or false.

### Truthy values

- All numbers(positive and negative) are truthy except zero
- All strings are truthy
- The boolean true

### Falsy values

- 0
- 0n
- null
- undefined
- NaN
- the boolean false
- '', "", ``, empty string

It is good to remember those truthy values and falsy values. In later section, we will use them with conditions to make decisions.

## Undefined

If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.

```js
let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet
```

## Null

```js
let empty = null
console.log(empty) // -> null , means no value
```

## Operators

### Assignment operators

An equal sign in JavaScript is an assignment operator. It uses to assign a variable.

```js
let firstName = 'Taha'
let country = 'India'
```

Assignment Operators

![Assignment operators](../images/assignment_operators_list.png)

### Arithmetic Operators

Arithmetic operators are mathematical operators.

- Addition(+): a + b
- Subtraction(-): a - b
- Multiplication(*): a * b
- Division(/): a / b
- Modulus(%): a % b
- Exponential(**): a ** b

```js
let oneNum = 4
let twoNum = 3
let sum = oneNum + twoNum
let diff = oneNum - twoNum
let mult = oneNum * twoNum
let div = oneNum / twoNum
let remainder = oneNum % twoNum
let powerOf = oneNum ** twoNum

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

```

```js
const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)
```

### Comparison Operators

In programming we can compare values, For that we can use comparison operators to compare two or more values. We check if a value is greater or less or equal to other value.




