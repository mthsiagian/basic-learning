// 1. Buatlah sebuah function yang dapat merotasi sebuah array sejumlah k element.
//  k adalah sebuah bilangan lebih kecil dari panjang array
// Contoh: 
// Array [1,2,3,4,5,6] , k = 0 outputnya [1,2,3,4,5,6]
// Array [1,2,3,4,5,6] , k = 1 outputnya [2,3,4,5,6,1]
// Array [1,2,3,4,5,6] , k = 2 outputnya [3,4,5,6,1,2]
// Array [1,2,3,4,5,6] , k = 3 outputnya [4,5,6,1,2,3]
// Array [3,5,2,9,6,1,3] , k = 4 outputnya [6,1,3,3,5,2,9]
// Array [3,5,2,9,6,1,3] , k = 5 outputnya [1,3,3,5,2,9,6]
// Array [3,5,2,9,6,1,3] , k = 6 outputnya [3,3,5,2,9,6,1]

// let arr = [1, 2, 3, 4, 5, 6];
// function rotasiArray (dataArray , kElement) {
//     let arrayGabung = dataArray.join("");
//     let panjangArrayGabung = arrayGabung.length;
//     let arrayMove = panjangArrayGabung - kElement;

//     return arrayMove;

// }
// rotasiArray (arr , 3);
// let panjangArr = arr.length; // = 6
let arr = [1,2,3,4,5,6]
let awal = arr.join("");
let panjangAwal = awal.length;
let kElement = 3;
let arrayKosong = [];
for (let i = 0; i < panjangAwal; i++) {
    if (i < kElement) {
        arrayKosong.push(awal[i + kElement])
    } else {
        arrayKosong.push(awal[i - kElement])  
    }
}
console.log(arrayKosong)


//2. Buatlah sebuah function yang dapat menemukan 
//bilangan palindrom terpanjang dari sebuah string.
// Contoh: "sasagas"
// panlindrome string: "sas", "asa", "aga" "sagas"
// palindrome dengan string terpanjang: sagas
// output: "sagas"