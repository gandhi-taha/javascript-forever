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

![Comparison Operators](../images/comparison_operators.png)

**Example: Comparison Operators**

```js
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
```

Try to understand the above comparisons with some logic. Remembering without any logic might be difficult.
JavaScript is some how a wired kind of programming language. JavaScript code run and give you a result but unless you are good at it may not be the desired result.

As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==. The following [link](https://dorey.github.io/JavaScript-Equality-Table/) has an exhaustive list of comparison of data types.

### Logical Operators

The following symbols are the common logical operators:
&&(ampersand) , ||(pipe) and !(negation).
The && operator gets true only if the two operands are true.
The || operator gets true either of the operand is true.
The ! operator negates true to false and false to true.

```js
// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

//! Negation examples

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = false
let isLightOff = !isLightOn           // true
let isMarried = false                
```

### Increment Operator

In JavaScrip we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. Let us see each of them:

1. Pre-increment

```js
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
```

1. Post-increment

```js
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
```

We use most of the time post-increment. At least you should remember how to use post-increment operator.

### Decrement Operator

In JavaScrip we use the decrement operator to decrease a value stored in a variable. The decrement could be pre or post decrement. Let us see each of them:

1. Pre-decrement

```js
let count = 0
console.log(--count) // -1
console.log(count)  // -1
```

2. Post-decrement

```js
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```

### Ternary Operators

Ternary operator allows to write a condition.
Another way to write conditionals is using ternary operators. Look at the following examples:

```js
let isRaining = true
isRaining
  ? console.log('You need an umbrella.')
  : console.log('No need for an umbrella.')
isRaining = false

isRaining
  ? console.log('You need an umbrella.')
  : console.log('No need for an umbrella.')
```

```sh
You need an umbrella.
No need for an umbrella.
```

```js
let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
```

```sh
5 is a positive number
-5 is a negative number
```

### Operator Precendence

I would like to recommend you to read about operator precendence from this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Window Methods

### Window alert() method

As you have seen at very beginning alert() method displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.

```js
alert(message)
```

```js
alert('Welcome to Javascript-Forever')
```

Do not use too much alert because it is destructing and annoying, use it just to test.

### Window prompt() method

The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

```js
prompt('required text', 'optional text')
```

```js
let number = prompt('Enter number', 'number goes here')
console.log(number)
```

### Window confirm() method

The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument.
Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

```js
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
```

These are not all the window methods we will have a separate section to go deep into window methods.

## Date Object

Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.The methods we use to get date and time information from a date object values are started with a word _get_ because it provide the information.
_getFullYear(), getMonths(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()_

![Date time Object](../images/date_time_object.png)

### Creating a time object

Once we create time object. The time object will provide information about time. Let us create a time object

```js
const now = new Date()
console.log(now)//VM180:2 Fri Feb 05 2021 08:41:25 GMT+0530 (India Standard Time)
```

We have created a time object and we can access any date time information from the object using the get methods we have mentioned on the table.

### Getting full year

Let's extract or get the full year from a time object.

```js
const now = new Date()
console.log(now.getFullYear()) // 2021
```

### Getting month

Let's extract or get the month from a time object.

```js
const now = new Date()
console.log(now.getMonth()) // 1, because the month is Feb,  month(0-11)
```

### Getting date

Let's extract or get the date of the month from a time object.

```js
const now = new Date()
console.log(now.getDate()) // 5, because the day of the month is 5th,  day(1-31)
```
```js
const now = new Date()
console.log(now.getDay()) // 5, because the day is Friday which is the 6th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
```

### Getting hours

Let's extract or get the hours from a time object.

```js
const now = new Date()
console.log(now.getHours())// 8, because the time is 08:47:51
```

### Getting minutes

Let's extract or get the minutes from a time object.

```js
const now = new Date()
console.log(now.getMinutes()) // 47, because the time is 00:47:51
```

### Getting seconds

Let's extract or get the seconds from a time object.

```js
const now = new Date()
console.log(now.getSeconds()) // 51, because the time is 00:47:51
```

### Getting time

This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

1. Using _getTime()_

```js
const now = new Date() //
console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from Jan 1, 1970 to Feb 6, 2021 00:47:51
```

1. Using _Date.now()_

```js
const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from Jan 1, 1970 to Feb 6, 2020 00:47:51

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true
```

Let us format these values to a human readable time format.
**Example:**

```js
const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 6/2/2021 0:47
```

 You have boundless energy. You have just completed 3 module challenges and now you are three steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.

## Module 03: Exercises

### Exercises: Level 1
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.
   1. Write three JavaScript statement which provide truthy value.
   2. Write three JavaScript statement which provide falsy value.

5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Find the length of python and jargon and make a falsy comparison statement.

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python

7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.

### Exercises: Level 2

1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 50
   ```

1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```

1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
1. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
1. Calculate the slope, x-intercept and y-intercept of y = 2x -2
1. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
1. Compare the slope of above two questions.
1. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
1. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```

1. If the length of your name is greater than 7 say, your name is long else say your name is short.
1. Compare your first name length and your family name length and you should get this output.

    ```js
    let firstName = 'Taha'
    let lastName = 'Gandhi'
    ```

    ```sh
    Your first name, Taha is short than your family name, Gandhi 
    ```

1. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```

1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

    ```sh

    Enter birth year: 1985
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

1. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

   ```sh
   Enter number of yours you live: 100
   You lived 3153600000 seconds.
   ```

1. Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm

### Exercises: Level 3

1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
1. YYY-MM-DD HH:mm eg. 20121-02-12 07:05

[<< Day 2](../Module_02/02_module_Data_types.md) | [Day 4 >>](../Module_04/04_conditionals.md)