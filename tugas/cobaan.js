function angkaPrima(n) {
  let vioPrima = true;
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i - 1; j++) {
      if (i % j == 0) {
        vioPrima = false;
      }
    }
    if(vioPrima){
      sum = sum + i
    }
    vioPrima = true;
  }
  return sum;

}
console.log(angkaPrima(20))

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

