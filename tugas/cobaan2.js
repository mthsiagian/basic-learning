// function angka(n){
//     if(n==0)return;
//     console.log(n)
//     return angka(n-1)
// }
// console.log(angka(20))
let z = 10;
for(a=1; a<=z; a++){
    let variabel = []
    for(b=1; b<=a; b++){
        let hasil = a * b
        // variabel.push (hasil)
        variabel.push(b + " x " + a + " = " + hasil);
    }
    console.log(variabel.join("  "))
}