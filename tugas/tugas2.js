// Example
function simpleCalculator(x, y, operator) {
    let hasilPerhitungan;
    if (operator == "+") {
        hasilPerhitungan = x + y;
    } else if (operator == "-") {
        hasilPerhitungan = x - y;
    } else if (operator == "*") {
        hasilPerhitungan = x * y;
    } else if (operator == "/") {
        hasilPerhitungan = x / y;
    } else {
        hasilPerhitungan = "opertator tidak ditentukan"
    }
    return hasilPerhitungan;
}

// Case: Menjumlahkan semua bilangan dalam array dengan bilangan setelahnya
// Output: 4
// Output: 8
// Output: 12
// Output: 16
// Output: 20
// Output: 24
// Output: 28
// Output: 32
// Output: 36
const arrayOfNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// FOR LOOP
// Condition: let i=0; i < 10; i++
for (let i = 0; i < arrayOfNumber.length; i++) {
    let hasilPenjumlahan;
    if (i + 1 <= 9) {
        // hasilPenjumlahan = arrayOfNumber[i] + arrayOfNumber[i+1];
        hasilPenjumlahan = simpleCalculator(arrayOfNumber[i], arrayOfNumber[i + 1], "+");
        console.log(hasilPenjumlahan);
    }
}


// TUGAS:
// - Lakukan perkalian jika bilangan pertama lebih besar dari 0 dan lebih kecil dari 10
// - Lakukan pengurangan jika bilangan pertama lebih besar dari 10 dan lebih kecil dari 20
// - Lakukan penjumlahan jika bilangan pertama lebih besar dari 20 dan lebih kecil dari 30
// Output: 3
// Output: 15
// Output: 35
// Output: 63
// Output: -2
// Output: -2
// Output: -2
// Output: -2
// Output: 44
// Output: 48
// Output: 52
// Output: 56

console.log("===================================================")
const arrayNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
for (let g = 0; g < arrayNumber.length; g++) {
    let indexNilai = arrayNumber[g];
    let indexNilaiBerikut = arrayNumber[g + 1];
    if (indexNilai > 0 && indexNilai < 10 && indexNilaiBerikut < 10) {
        hasilPerkalian = simpleCalculator(indexNilai, indexNilaiBerikut, "*");
        console.log(hasilPerkalian);
    }


    if (indexNilai > 10 && indexNilai < 20 && indexNilaiBerikut < 20) {
        hasilPengurangan = simpleCalculator(indexNilai, indexNilaiBerikut, "-");
        console.log(hasilPengurangan);
    }

    if (indexNilai > 20 && indexNilai < 30 && indexNilaiBerikut < 30) {
        hasilPenambahan = simpleCalculator(indexNilai, indexNilaiBerikut, "+");
        console.log(hasilPenambahan);
    }
}


console.log("===================================================")
console.log("=================== Bubble Sort ===================")
console.log("===================================================")
// TUGAS: Bubble sort
// - Lakukan perkalian jika bilangan pertama lebih besar dari 0 dan lebih kecil dari 10
// - Lakukan pengurangan jika bilangan pertama lebih besar dari 10 dan lebih kecil dari 20
// - Lakukan penjumlahan jika bilangan pertama lebih besar dari 20 dan lebih kecil dari 30
// Output: 3
// Output: 15
// Output: 35
// Output: 63
// Output: -2
// Output: -2
// Output: -2
// Output: -2
// Output: 44
// Output: 48
// Output: 52
// Output: 56
const unsortedArrayOfNumber1 = [3, 7, 9, 27, 13, 5, 15, 29, 1, 17, 19, 21, 23, 11, 25];
const unsortedArrayOfNumber2 = [9, 27, 13, 5];

function bubbleSort(arrayOfNumber) {
    for (let i = 0; i < arrayOfNumber.length - 1; i++) {
        for (j = 0; j < arrayOfNumber.length - 1; j++) {
            let currentValue = arrayOfNumber[j];
            let nextValue = arrayOfNumber[j + 1];

            if (currentValue > nextValue) {
                arrayOfNumber[j] = nextValue;
                arrayOfNumber[j + 1] = currentValue;
            }
        }
    }
    return arrayOfNumber;
}

console.log(bubbleSort(unsortedArrayOfNumber1));
console.log(bubbleSort(unsortedArrayOfNumber2));
