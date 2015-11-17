/**
 * Created by khanh on 14/11/2015.
 */
"use strict";
var age = 10;
const pi = 3.14158;
console.log(typeof pi);

if (parseInt(age)){
    console.log("Age is number");
} //NaN

var myage = "aaa";
var myage2 = parseInt(myage);

//Boolean [false, true]
var nodejs_slow = false;
var iojs_fast = true;

if (nodejs_slow) {
    console.log("Node.js is slow");
} else { console.log("Node.js is fast");
}

if (!nodejs_slow){
    console.log("Node.js is not slow");
}

if (!nodejs_slow && iojs_fast){
    console.log("Both Node.js and iojs are fast");
}

// String

var best_film = "Gone with the wind";
var best_hero = 'Bat man';
var best_player = "it's true";

console.log(best_player);


//Object
var book = { name: "Java Cookbook", author: "khanh"};
console.log(book.name);
console.log(book.price);

var person = {firstname: "Trinh", lastname: "Cuong"};
console.log(person[1]);


