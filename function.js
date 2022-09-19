// Simple Calculator

const x=1;
const y=2;

console.log(x + y)

const x1=2;
const y1=3;
console.log(x1+ y1)


// Code 
function sayHello(argument1) {
    console.log("Hello "+ argument1);
}

sayHello("jerry");


// Format 24 jam
// Jam 1 - 11 : pagi
// Jam 12 - 18 : siang
// Jam 19 - 24 : malam
function sayHelloAdvance(name, time) {
    let timeCategory;

    if(time >= 1 && time <= 11) {
        timeCategory="Pagi";
    } else if(time >= 12 && time <= 18) {
        timeCategory="Siang";
    } else if(time >= 19 && time <= 24) {
        timeCategory="Malam"
    } else {
        timeCategory="Tidak tentu"
    }

    console.log(`Hello ${name}, Waktu setempat: ${timeCategory}`);
}

sayHelloAdvance("Jery", 21);
sayHelloAdvance("Jery", [1, 2, 4]);

// "1" == 1 => true
// "1" === 1 => false


// x: bilangan 1
// y: bilangan 2
// operator: string operator
function simpleCalculator(x, y, operator) {
    // do something
}

simpleCalculator(1, 2, "+"); // Output: 3
simpleCalculator(3, 1, "-"); // Output: 2
simpleCalculator(5, 2, "*"); // Output: 10
simpleCalculator(10, 2, "/"); // Output: 5
simpleCalculator(10, 2, "?"); // Output: operator tidak ditemukan