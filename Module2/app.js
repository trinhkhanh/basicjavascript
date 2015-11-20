/**
 * Created by khanh on 20/11/2015.
 */

var stringDemo = "you can do anything, but not everything";

var str = require('./SuperString');

// To invert string
console.log(str.invert(stringDemo));

// Convert string to camel case

console.log(stringDemo.toCamel());

// Return longest word

console.log(str.longestword(stringDemo));

