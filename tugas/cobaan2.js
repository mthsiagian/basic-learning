function angka(n){
    if(n==0)return;
    console.log(n)
    return angka(n-1)
}
console.log(angka(20))