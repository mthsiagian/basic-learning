function simpleCalculator(x, y,operator ){

    let hasilPerhitungan;
    if (operator=="+") {
        hasilPerhitungan= x + y; 
    } else if(operator=="-") {
        hasilPerhitungan= x-y;
    } else if(operator=="*") {
        hasilPerhitungan= x * y;
    } else if(operator=="/") {
        hasilPerhitungan=x / y;
    } else {
        hasilPerhitungan="opertator tidak ditentukan"
    }
    console.log(hasilPerhitungan)
}


simpleCalculator(1, 2, "+")
simpleCalculator(4, 2, "-")
simpleCalculator(2, 5, "*")
simpleCalculator(6, 3, "/")
simpleCalculator(9,6, "?")





function simpleCalculato(x, y, operator){

    let hasilPerhitungan;
    if (operator=="+") {
        hasilPerhitungan= x + y; 
    } else if(operator=="-") {
        hasilPerhitungan= x-y;
    } else if(operator=="*") {
        hasilPerhitungan= x * y;
    } else if(operator=="/") {
        hasilPerhitungan=x/ y;
    } else {
        hasilPerhitungan="opertator tidak ditentukan"
    }
    return hasilPerhitungan;
}

let hasil= 6;
console.log(hasil)
hasil= simpleCalculato(3, 2, "+")
console.log(hasil)
console.log(simpleCalculato(3, 2, "+"))
console.log(simpleCalculato(4.2, 6, "*"))

