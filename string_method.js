/**
 * Created by khanh on 14/11/2015.
 */
var quotes = "Darkness cannot drive out darkness; " +
    "only light can do that. " +
    "Hate cannot drive out hate; " +
    "only love can do that.";
console.log(quotes);

var firstPost = quotes.indexOf("only");
var lastPost = quotes.lastIndexOf("only");
console.log("firstPost =", firstPost, "lastPost =", lastPost);

var canPost = quotes.search(/ca..ot/); //  Regular Expression
console.log(canPost);

var contact = "phone 0987628 ";
var phoneos = contact.search(/[0-9] +/);

console.log(phoneos);

var ilove = "I love PHP. PHP file extension is php";
var iLoveNode = ilove.replace(/PHP/ig, "Node.js");
console.log(iLoveNode);

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

console.log(str.toLowerCase());
console.log(str.toUpperCase());

var fruits = str.split(", ");
console.log(fruits.valueOf());

var love = "Love";
for (var i = love.length; i >= 0;i--){
    console.log(love.charAt(i));
}

String.prototype.reverse = function() {
    var result = "";
    for (var i = love.length -1 ; i >= 0; i--){
        result += love.charAt(i);
    }
    return result;
};
