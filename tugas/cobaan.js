// // // /**
// // //           *           => i = 0, posisiAwal = 5 
// // //         * * *         => i = 1, posisiAwal = 4
// // //       * * * * *       => i = 2, posisiAwal = 3
// // //     * * * * * * *     => i = 3, posisiAwal = 2
// // //   * * * * * * * * *   => i = 4, posisiAwal = 1
// // // * * * * * * * * * * *   => i = 5, posisiAwal = 1
// // //  */

let x = 5;
let y = 2 * x + 1;

for(let i=0; i < x; i++) {
  let arr = [];
  let counter = 1
  // let counterKurang= i-1
  let posisiAwal = y - x - i ;
  let panjangKolom = 2 * i + 1 ;
  let posisiAkhir = posisiAwal + panjangKolom;
  for(let j=0; j < y; j++) {
    let nilaiTengah = y/2

    if(j >= posisiAwal && j < posisiAkhir) {
      if(j <= nilaiTengah){
        arr.push(counter++)
      } else {
        arr.push(counter--)
      }
    }
      else {
      arr.push("*")
    }
  }
  console.log(arr.join(" "))
}

// // let vio = 1
// // for(let i=0; i < 5; i++) {
// //   let arr = [];
// //   for(let j=0; j <= i; j++) {
    
// //       arr.push(vio++)
// //     }
// //     console.log(arr.join(" "))
// // }
