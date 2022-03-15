# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by @tonyyuu2 as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

ççç*Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns the first index of an array.
* `tail()`: returns the last two values of an array.
* `middle()`: returns the middle index of an array.
* `assertArraysEqual()`: compares two arrays and passes assertion.
* `assertEqual()`: takes in a value and an expected value and passes an assertion.
* `assertObjectsEqual()`: compares two objects and returns an assertion.
* `countLetters()`: returns an object of the number of times a  letter appears in a given input.
* `countOnly()`: counts and returns the number of any value as it * appears in a given input.
* `eqArrays()`: compares to arrays and returns true if both are * equal.
* `without()`: returns a new array after removing an element of a * given input.
* `takeUntil()`: returns a set of values until a condition is no longer true. 
* `map()`: creates a new array that calls back another function  to output new values within the array.
* `letterPositions()`: returns indices of letters in an array.
* `findKeyByValue()`: returns the key value of an object.
* `eqObjects()`: compares if two objects are equal to one another
* `findKey()`: scans object and returns the first key for which the callback returns a truthy value.