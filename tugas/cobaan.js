// function angkaPrima(n) {
//   let vioPrima = true;
//   let sum = 0;
//   for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i - 1; j++) {
//       if (i % j == 0) {
//         vioPrima = false;
//       }
//     }
//     if(vioPrima){
//       sum = sum + i
//     }
//     vioPrima = true;
//   }
//   return sum;

// }
// console.log(angkaPrima(20))

// for (i=2; i<=n; i++){
//   console.log("i ke -" + i)
//   for (j=2; j<i-1; j++){
//    if( i % j == 0){
//     console.log('horas')
//    } else {
//     console.log(i)
//    }
//   }
// }

// function segitiga (n){
//   for (let i = 0; i < n; i++){
//     let tempat = [];
//     let posisiAwal = (n - 2) - 2 * i;
//     posisi
//     for( let j = 0; j < n; j++){
//       if(posisiAwal){
//         tempat.push("x")
//       } else {
//         tempat.push("saya pergi")
//       }
//     }
//     console.log(tempat.join(""))
//   }
// }
// segitiga (10)
x = 5
y = x * 2 - 1

for (i = 0; i < x; i++) {
  let arr = []
  // let dimulai = y - x * 2 + i
  // let panjang = y - 2 * i - 2
  let dimulai = i;
  let panjang = 2 * (x - i) - 1;
  let diakhiri = dimulai + panjang
  for (j = 0; j < y; j++) {

    if (j >= dimulai && j < diakhiri) {
      arr.push(' ')
    } else {
      arr.push("*")
    }
  }

  console.log(arr.join(` `))
}