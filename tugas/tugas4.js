// 1. FIZZBUZZ
// Tulis sebuah program yang mengeluarkan output 1 - 100.
// Setiap kelipatan 3 output "Fizz"
// Setiap kelipatan 5 output "Buzz"
// Setiap kelipatan 3 dan 5 output, "FizzBuzz"
// Output: 1, 2, "Fizz", 4, "Buzz", 6, ..., 13, 14, "FizzBuzz", 16, ..., 98, "Fizz", "Buzz"
for (i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log('FizzBuzz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else if (i % 3 == 0) {
        console.log('Fizz')
    }
    else {
        console.log(i)
    }
}


console.log(`=============================`)

// 2. Penjumlahan bilangan prima dengan metode rekursif
// Contoh: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, to n
function angkaPrima(n) {
    let vioPrima = true;
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i - 1; j++) {
            if (i % j == 0) {
                vioPrima = false;
            }
        }
        if (vioPrima) {
            sum = sum + i
        }
        vioPrima = true;
    }
    return sum;
}
console.log(angkaPrima(11))

console.log(`=====================`)

// 3. Penjumlahan bilangan dari angka kelipatan 3 dan 5 sejumlah n input dimulai dari 1
// Contoh: n = 11 
// hasil = 3 + 5 + 6 + 9 + 10 = ....

function kelipatan(q) {
    let sum = 0;
    for (i = 1; i <= q; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum = sum + i
        }
    } return sum;
}
console.log(kelipatan(10))


// 4. Buat sebuah program yang mengeluarkan output tabel perkalian sampai n max=12
// '1 x 3 = 3'
// '1 x 3 = 3'
// '1 x 3 = 3'
// '1 x 3 = 3'
// '\n'
// '1 x 3 = 3'
// '1 x 3 = 3'
// '1 x 3 = 3'
// '1 x 3 = 3'
// '1 x 3 = 3'
// '\n'
function deretPerkalian(x) {
    for (a = 1; a <=12; a++) {
        let variabel = []
        for (b = 1; b <= a; b++) {
            let hasil = a * b
            // variabel.push (hasil)
            variabel.push(b + " x " + a + " = " + hasil);
        }
        console.log(variabel.join("  "))
    }
}
deretPerkalian(5)

// 5. Buat sebuah function yang mengeluarkan output bilangan terbesar dari sebuah array
// Contoh: Array [3, 5, 1, 2, 4, 6, 20, 22, 53, 32] 
// Output: 53
// Contoh: Array [3, 5, 1, 2, 4, 6, 200, 22, 53, 32, 3, 0, 9, 12, "I"]
// Output: 200
console.log(`==========================`)
const arr = [3, 5, 1, 2, 4, 6, 20, 22, 53, 32];
const arr2 = [3, 5, 1, 2, 4, 6, 200, 22, 53, 32, 3, 0, 9, 12, "I"]
function maxVelue(arr) {
    let velueMax = -99999
    for (i = 0; i < arr.length; i++) {
        let arrVelue = arr[i]
        if (velueMax < arrVelue) {
            velueMax = arrVelue
        }
    }
    return velueMax;
}

console.log(maxVelue(arr2))
// console.log(200 < "I")


// 6. Buat sebuah function yang mengeluarkan satu output string yang memiliki length terpendek
// Contoh: Array ["abc", "jery", "herman", "vio", "dio", "jesica", "a"]
// Output: "a"
// Contoh: Array ["abc", "jery", "b", "vio", "dio", "jesica"]
// Output: "b" 
console.log(`===================`)
const nama = ["abc", "jery", "b", "vio", "dio", "jesica"];
function namaMax(nama) {
    let namaMin = null;
    let namaMinLenght = 99999;
    for (i = 0; i < nama.length; i++) {
        let velueNama = nama[i];
        if (namaMinLenght > velueNama.length) {
            namaMinLenght = velueNama.length
            namaMin = nama[i]
        }

    }
    return namaMin;
}

console.log(namaMax(nama))


















