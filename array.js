/**
 * Created by khanh on 14/11/2015.
 */

var cars = ["BMW", "Time", "Bag"];
console.log(cars.valueOf());

/* for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

console.log(cars.join("and")); */

cars.push("Honda");
cars.push("truong hai auto");
cars.push("Toyota");

console.log(cars.valueOf());

while (cars.length > 0) {
    cars.pop();
    console.log(cars.valueOf());
}
/*
while (cars.length > 0) {
    cars.shift();
    console.log(cars.valueOf());
}
*/

function now(txt) {
    console.log(new Date().toLocaleTimeString());

}