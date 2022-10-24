function sayHello() {
    return "hello friends";
}

console.log(sayHello());


// function recursiveFunction() {
//     return recursiveFunction();
// }

// case menjumlahkan bilangan dari n + (n-1) + (n-2) + ... + 0
// contoh: n = 5
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// contoh: n = 6
// 6 + 5 + 4 + 3 + 2 + 1 + 0 = 21
// console.log("================================")
// console.log(" Reguler function")
// console.log("================================")
// function sumFunction(n) {
//     let sum=1;
//     for(let i = 0; i <= n; i++) {
//         sum = sum + i;
//         return sum;
//     }
// }

// console.log(sumFunction(5))
// console.log(sumFunction(6))

// function factorialFunction(n) {
//     let sum=1;
//     for(let i = 1; i <= n; i++) {
//         sum = sum * i;
//     }
//     return sum;
// }

// console.log(factorialFunction(5))

// console.log("================================")
// console.log(" sum recursive function")
// console.log("================================")

// function sumRecursiveFunction(n) {
//     if(n <= 0) {
//         return 0;
//     } else {
//         return n + sumRecursiveFunction(n-1);
//     }
// }

// console.log(sumRecursiveFunction(5))
// console.log(sumRecursiveFunction(6))
// console.log(sumRecursiveFunction(10))


console.log("================================")
console.log(" factorial recursive function")
console.log("================================")

function factorialRecursiveFunction(n) {
    let vioPrima = true;
for(let i=2; i <= n; i++){
  for(let j=2; j < i - 1; j++){
    if(i % j == 0){
      vioPrima = false;
    }
  }
  if(vioPrima){
    console.log(i);
  }
//   vioPrima = true;

}
    if(n <= 2) {
        return 2;
        
    } else {
        return n + factorialRecursiveFunction(n-1);
    }
}

console.log(factorialRecursiveFunction(3))
// console.log(factorialRecursiveFunction(4))
// console.log(factorialRecursiveFunction(5))