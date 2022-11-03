let angka = 323;
let panjang = 8;
let panjangAngka = angka.toString().length
let isiAngka = angka.toString()
let j = 0;
for(let i=1; i<=panjang; i++){
    if (i > panjang - panjangAngka ){
        console.log(isiAngka[j++])
    } else {
        console.log(0)
    }
}

let fibonacci = 1;
let batasDeret = 4;
let a = 1;
let b = 1;
let c = 0;
console.log("Fibonacci");
console.log(a);
console.log(b);
for (i=0; i<=batasDeret; i++){
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}

let input = 4;
for(let i=0; i<=input; i++){
    let arr = []
    for( let j=0; j < 2 * i + 1; j++){
        arr.push("* ")
    }
    console.log(arr.join(""))
}
