function soalVio(n) {
    for (let i = 1; i <= n; i++) {
        let tempat = [];
        for (let j = 1; j <= n + 3; j++) {
            if (j == i + 1 || j == i + 2) {
                tempat.push("*");
            } else {
                tempat.push(j);
            }
        }
        console.log(tempat.join(""));
    }
}
soalVio(2);

console.log("=============================")

let angka = 1225441;
let panjangAngka = angka.toString.length
// 


console.log("===========================")

function hasilScore(nilai) {
    if ( nilai > 100){
        console.log ("ERORRRR !!")
    } else if (nilai >= 90) {
        console.log("Selamat Anda LULUS !");
    } else if (nilai >= 80) {
        console.log("Anda mendapat nilai B")
    } else if (nilai >= 70) {
        console.log("Anda mendapat nilai C")
    } else if (nilai>= 60) {
        console.log("Anda mendapat nilai D")
    } 
    else {
        console.log("Anda tidak LULUS !!")
    } 
}
hasilScore(60);

console.log ("====================================");
console.log ("====================================");
console.log ("====================================");

let x = 5;
let y = 2 * x - 1;

for (let i = 0; i < x; i++) {
  let arr = [];
  let posisiAwal = y - x - i;
  let panjangKolom = 2 * i + 1;
  let posisiAkhir = posisiAwal + panjangKolom;

  for (let j = 0; j < y; j++) {
    if (j >= posisiAwal && j < posisiAkhir) {
        arr.push("*")
    }
    else {
      arr.push("x")
    }
  }
  console.log(arr.join(" "))
}

console.log ("====================================");
console.log ("====================================");
console.log ("====================================");

let nama = "say" ; 
let panjang = nama.length; 

for( let i = 0; i < panjang; i++){
    let baru = [];
    for ( let j = 0; j <= i; j++){
        if ( j >= i){
            baru.push(nama[i])
        } else {
            baru.push(" ")
        }
    }
    console.log(baru.join(" "))
}