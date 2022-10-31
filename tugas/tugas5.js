// 1. Buatlah sebuah program yang meminta user memasukkan nama, dan kemudian menyapa user dengan namanya!

// 2. Buat sebuah function yang mengeluarkan output frame dari sebuah array of string seperti dibawah.
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:

// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

let arr = ["Hello", "World", "in", "a", "frame"]
function dataString (arr){
let panjangArr = arr.length
console.log("*********")
for(let i=0; i<panjangArr; i++){
    console.log("* " + arr[i] + "\t*")
    
}
console.log("*********")
}
dataString(arr)
// 3. Write a function that tests whether a string is a palindrome.
// example: 
// "buku": false
// "kayak": true

// function palindromeCheck(customString) {}  
const palindromeCheck = (customString) => {
        // 1. Simpan value dari string awal - DONE
        const initialString = customString.toString();
        const arrayString = initialString.split('');
    
        // 2. lakukan proses reverse
            // b u k u - u k u b
        let reversedArray = [];
        const arrayLength = arrayString.length;
        for(let i=0; i < arrayLength; i++) {
            reversedArray[i] = arrayString[arrayLength - (i + 1)]
        }
        const reversedString = reversedArray.join('');
         
        // 3. Check string setelah reverse identik dengan string sebelum reverse
        return initialString === reversedString;
}
console.log(palindromeCheck("12345654321"))



// 4. Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
let dataHuruf = [a,b,c];
let dataAngka = [1,2,3];


// 5. Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
// 6. Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6].

