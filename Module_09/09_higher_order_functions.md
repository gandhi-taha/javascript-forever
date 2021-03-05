<div align="center">
<h1> Javasript Forever: Module 09 - Higher Order Functions  </h1>
<a class="header-badge" target="_blank" href="https://www.linkedin.com/in/taha-gandhi-5525b1160/">
  <img alt="Linkedin Follow" src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/gandhi_taha">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/gandhi_taha?style=social">
  </a>
  </div>
<br>


- [Module 09](#module-09)
  - [Higher Order Function](#higher-order-function)
    - [Callback](#callback)
    - [Returning function](#returning-function)
    - [setting time](#setting-time)
      - [setInterval](#setinterval)
      - [setTimeout](#settimeout)
  - [Functional Programming](#functional-programming)
    - [forEach](#foreach)
    - [map](#map)
    - [filter](#filter)
    - [reduce](#reduce)
    - [every](#every)
    - [find](#find)
    - [findIndex](#findindex)
    - [some](#some)
    - [sort](#sort)
      - [Sorting string values](#sorting-string-values)
      - [Sorting Numeric values](#sorting-numeric-values)
      - [Sorting Object Arrays](#sorting-object-arrays)
  - [Exercises](#-exercises)
    - [Exercises: Level 1](#exercises-level-1)
    - [Exercises: Level 2](#exercises-level-2)
    - [Exercises: Level 3](#exercises-level-3)

# Module 09

## Higher Order Function

Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

### Callback

A callback is a function which can be passed as parameter to other function. See the example below.

```js
// a callback function, the function could be any name
const callback = (n) => {
  return n ** 2
}
​
// function take other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))
```

### Returning function

Higher order functions return function as a value
​

```js
// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
​
  return doSomething
}
console.log(higherOrder(2)(3)(10))
```

Let us see were we use call back functions.For instance the _forEach_ method uses call back.

```js
const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  const callBack = function(element) {
    sum += element
  }
  numbers.forEach(callback)
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

The above example can be simplified as follows:

```js
const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  numbers.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

### setting time

In JavaScript we can execute some activity on certain interval of time or we can schedule(wait) for sometime to execute some activities.

- setInterval
- setTimeout

#### setInterval

In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

```js
// syntax
function callBack() {
  // code goes here
}
setInterval(callback, duration)
```

```js
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 2000) // it prints hello in every 2 seconds
```


## Functional Programming

Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see _forEach_, _map_, _filter_, _reduce_, _find_, _every_, _some_, and _sort_.

### forEach

_forEach_: Iterate an array elements. We use _forEach_ only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

```js
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
```

```js
let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach(num => console.log(num)))

console.log(sum)
```

```sh
1
2
3
4
5
```

```js
let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach(num => sum += num))

console.log(sum)
```

```sh
15
```

```js
const countries = ['France', 'Denmark', 'Sweden', 'Norway', 'India']
countries.forEach((element) => console.log(element.toUpperCase()))
```

```sh
FRANCE
DENMARK
SWEDEN
NORWAY
INDIA
```

### map

_map_: Iterate an array elements and modify the array elements. It takes a callback function with elements,  index , array parameter and return a new array.

```js
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
```

```js
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)
```

```sh
[1, 4, 9, 16, 25]
```

```js
const names = ['Taha', 'Vivek', 'Pavan', 'Shiv']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
```

```sh
['TAHA', 'VIVEK', 'PAVAN', 'SHIV']
```

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'France',
  'Germany',
  'Hungary',
  'India',
  'Japan',
  'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/
```

```sh
['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FRANCE', 'GERMANY', 'HUNGARY', 'INDIA', 'JAPAN', 'KENYA']
```

```js
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
```

```sh
 ["ALB", "BOL", "CAN", "DEN", "ETH", "FAR", "GER", "HUN", "IND", "JAP", "KEN"]
```

### filter

_Filter_: Filter out items which full fill filtering conditions and return a new array.

```js
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('ia')
)
console.log(countriesContainingLand)
```
```sh
['Albania','Bolivia','Ethiopia','India']
```

```js
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)
```

```sh
['India','Japan', 'Kenya']
```


```js
const scores = [
  { name: 'Taha', score: 95 },
  { name: 'Pavan', score: 80 },
  { name: 'Vivek', score: 50 },
  { name: 'Madhuri', score: 85 },
  { name: 'Shiv', score: 100 },
]

const scoresGreaterEight = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEight)
```

```sh
[{name: 'Taha', score: 95}, {name: 'Madhuri', score: 85},{name: 'Shiv', score: 100}]
```

### reduce

_reduce_: Reduce takes a callback function. The call back function takes accumulator,  current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array `first value`. If our array is an _empty array_, then `Javascript` will throw an error.

```js
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
 return 
}, initialValue)
```

```js
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)
```

```js
15
```

### every

_every_: Check if all the elements are similar in one aspect. It returns boolean

```js
const names = ['Taha', 'Vivek', 'Madhuri', 'Shiv']
const areAllStr = names.every((name) => typeof name === 'string')

console.log(arrAllStr)
```

```sh
true
```



```js
const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => {
  return b === true
})

console.log(areAllTrue) //true
```

```sh
true

```

### find

_find_: Return the first element which satisfies the condition

```js
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)
```

```js
18
```

```js
const names = ['Taha', 'Pavan', 'Vivek', 'Madhuri']
const result = names.find((name) => name.length > 7)
console.log(result)
```

```sh
Taha
```

```js
const scores = [
  { name: 'Taha', score: 95 },
  { name: 'Pavan', score: 80 },
  { name: 'Vivek', score: 50 },
  { name: 'Madhuri', score: 85 },
  { name: 'Shiv', score: 100 },
]


const score = scores.find((user) => {
  return user.score > 80
})
console.log(score)
```

```sh
{ name: "Taha", score: 95 }
```

### findIndex

_findIndex_: Return the position of the first element which satisfies the condition

```js
const names = ['Taha', 'Pavan', 'Vivek', 'Shiv']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5
```

### some

_some_: Check if some of the elements are similar in one aspect. It returns boolean

```js
const names = ['Taha', 'Pavan', 'Vivek', 'Shiv']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) => {
  return b === true
})

console.log(areSomeTrue) //true
```

```js
const areAllStr = names.some((name) => typeof name === 'number')
console.log(areAllStr) // false
```

### sort

_sort_: The sort methods arranges the array elements either ascending or descending order. By default, the **_sort()_** method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using _sort_ method.

#### Sorting string values

```js
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
```


#### Sorting Numeric values

As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

```js
const numbers = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]
```

#### Sorting Object Arrays

When ever we sort objects in an array. We use the object key to compare. Lets see the example below.

```js
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

const users = [
  { name: 'Taha', age: 150 },
  { name: 'Pavan', age: 50 },
  { name: 'Madhuri', age: 100 },
  { name: 'Shiv', age: 22 },
]

users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
//[{…}, {…}, {…}, {…}]
```
You are doing great.Never give up because great things take time. You have just completed day 9 challenges and you are 9 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.

##  Exercises

### Exercises: Level 1

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Taha', 'Pavan', 'Madhuri', 'Shiv']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
```
You are doing great.Never give up because great things take time. You have just completed Modules 9 their challenges and you are 9 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.

