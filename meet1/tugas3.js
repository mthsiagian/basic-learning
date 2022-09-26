/**
    *
    * *
    * * *
    * * * *
    * * * * *
 */

for(let i=0; i < 5; i++) {
  let arr = [];
    for(let j=0; j <= i; j++) {
      arr.push('* ')
    }
    console.log(arr.join(""))
    // console.log("\n")
}



/**
    A
    B B
    C C C
    D D D D
    E E E E E
 */ 
    let arrWord = ["A", "B", "C", "D", "E"];
    for(let i=0; i < 5; i++) {
      let arr = [];
        for(let j=0; j <= i; j++) {
          arr.push(arrWord[i])
        }
        console.log(arr.join(" "))
    }
    

/**
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
 */
    let arrInt = [1, 2, 3, 4, 5];
    for(let i=0; i < 5; i++) {
      let arr = [];
      for(let j=0; j <= i; j++) {
          arr.push(arrInt[j])
        }
        console.log(arr.join(" "))
    }
    

/**
    * * * * *
    * * * *
    * * * 
    * *
    *
 */
 for(let i=0; i < 5; i++) {
  let arr2 = [];
    for(let j=i; j < 5; j++) {
      arr2.push('* ')
    }
    console.log(arr2.join(""))
    // console.log("\n")
}

 
/**
    1 2 3 4 5 -> i=0
    1 2 3 4   -> i=1
    1 2 3     -> i=2
    1 2       -> i=3
    1         -> i=4
 */
for(let i=0; i < 5; i++) {
  let counter = 1;
  let arr = [];
  for(let j=i ; j < 5; j++) {
    arr.push(counter++)
  }
  console.log(arr.join(" "))
}



/**
          *           => i = 0, posisiAwal = 5 
        * * *         => i = 1, posisiAwal = 4
      * * * * *       => i = 2, posisiAwal = 3
    * * * * * * *     => i = 3, posisiAwal = 2
  * * * * * * * * *   => i = 4, posisiAwal = 1
* * * * * * * * * * *   => i = 5, posisiAwal = 1
 */

let x = 5;
let y = 2 * x +1;

for(let i=0; i < x; i++) {
  let arr = [];
  let posisiAwal = y - x - i;
  let panjangKolom = 2 * i + 1;
  let posisiAkhir = posisiAwal + panjangKolom;

  for(let j=0; j < y; j++) {
    if(j >= posisiAwal && j < posisiAkhir) {
      arr.push('*')
    } else {
      arr.push(" ")
    }
  }
  console.log(arr.join(" "))
}


// /**
//         1
//       2 3 2
//     3 4 5 4 3
//   4 5 6 7 6 5 4
// 5 6 7 8 9 8 7 6 5
//  */

// for(let i=0; i < 5; i++) {
//   let arr2 = [];

//     for(let j=i; j < 5; j++) {
//       arr2.push(' ')
//     }
//     for( let y= 0; y< i; y++){
//       arr2.push(`*`)
//     }
//     console.log(arr2.join(" "))
//   }
//   console.log(`============================`)

//   let arrInt1 = [1, 2, 3, 4, 5];
//   for(let i=0; i < 5; i++) {
//     let arr2 = [];
//     let dataBaru = arrInt1[i]
//     let dataNextBaru= arrInt[i + 1]
//     for(let j=i; j <= 5; j++) {
//       arr2.push(' ')
//     }
//     for( let y= 0; y<= i; y++){
//       arr2.push(arrInt1)
//     }
//     console.log(arr2.join(""))
//   }
//     console.log(`============================`)

// /**
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *
//  */
// for(let i=0; i < 5; i++) {
//   let arr2 = [];
//     for(let j=0; j < i; j++) {
//       arr2.push(' ')
//     }
//     for( let y= i; y < 5; y++){
//       arr2.push(`* `)
//     }
//     console.log(arr2.join(""))
//   }


// /**
//            1
//          1   1
//        1   2   1
//      1   3   3    1
//    1  4    6   4   1
//  1  5   10   10  5   1
//  */

// /**
//     1
//     2 3
//     4 5 6
//     7 8 9 10
//  */
// //   let arrInt0 = [1, 2, 3, 4, 5];
// // for( i =0; i< 5; i++){
// //   let velue= i +1
// //   let arr2 = [];
// //   for(let j=0; j < i; j++) {
// //     arr2.push(arrInt0)}
// //     console.log(arr2.join(""))
// //   }


