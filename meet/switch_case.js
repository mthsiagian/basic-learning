// Swicth digunakan untuk memilih statement dari banyak blok kode yang dieksekusi

// Syntax

// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }


function switchCaseBulan(bulan) {
    switch(bulan) {
        case 1:
            return "Jan";
            break;
        case 2:
            return "Feb";
            break;
        case 3:
            return "Mar";
            break;
        case 4:
            return "Apr";
            break;
        case 5:
            return "May";
            break;
        case 6:
            return "June";
            break;
        case 7:
            return "Jul";
            break;
        case 8:
            return "Aug";
            break;
        case 9:
            return "Sep";
            break;
        case 10:
            return "Oct";
            break;
        case 11:
            return "Nov";
            break;
        case 12:
            return "Dec";
            break;
        default:
            return "Bulan tidak ditemukan";
      }
}

console.log(switchCaseBulan(10))
console.log(switchCaseBulan(12))
console.log(switchCaseBulan(9))
console.log(switchCaseBulan("kjasndf"))