console.log("================================================");
console.log("==================== String ====================");
console.log("================================================");
// variable
let exampleText="H e l lo World!";

// String
// Text / Plain text => "kalimat disini"
console.log(exampleText);
console.log(exampleText.length);
console.log(exampleText[11]);
console.log(exampleText.split(' ')); // type object

// String interpolation: menggabungkan banyak value jadi 1 string baru
console.log(exampleText + " " + "Jerry");
console.log(`${exampleText} Jerry`);
console.log(typeof(exampleText));


console.log("================================================");
console.log("==================== Integer ====================");
console.log("================================================");
// variable
let exampleInteger=100;

// String
// Text / Plain text => "kalimat disini"
console.log(exampleInteger);
console.log(typeof(exampleInteger));


console.log("================================================");
console.log("==================== Double ====================");
console.log("================================================");
// variable
let exampleDouble=100.5;

// String
// Text / Plain text => "kalimat disini"
console.log(exampleDouble);
console.log(typeof(exampleDouble));


console.log("================================================");
console.log("==================== Boolean ====================");
console.log("================================================");
// variable
let exampleBoolean=false;

console.log(exampleBoolean);
console.log(typeof(exampleBoolean));


console.log("================================================");
console.log("==================== Array ====================");
console.log("================================================");
// variable
let exampleArrayOfInteger=[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
let exampleArrayOfString=["text1", "text2", "text3"];

console.log(exampleArrayOfInteger);
// console.log(exampleArrayOfString);
// console.log(typeof(exampleArrayOfString));

console.log("panjang array ", exampleArrayOfInteger.length);
console.log("panjang array" + " " + exampleArrayOfInteger.length);
console.log(typeof(exampleArrayOfInteger));

let index=7;
console.log(`array index ke-${index}`)
console.log(exampleArrayOfInteger[index])


// Cara akses array index terakhir
const lastIndex=exampleArrayOfInteger.length - 1;
console.log(exampleArrayOfInteger[lastIndex]);
console.log(typeof(lastIndex))


console.log(exampleArrayOfString.join(''))
console.log(exampleArrayOfString.join().length)


console.log("================================================");
console.log("==================== Variable declaration ====================");
console.log("================================================");

const var1=10;
let var2=10;

// var1=11; causing error to constant
var2=11;

console.log("var1-", var1, typeof(var1));
console.log("var2-", var2);

var2=12
console.log("var2-", var2, typeof(var2));

var2="string"
console.log("var2-", var2, typeof(var2));

var2=false
console.log("var2-", var2, typeof(var2));