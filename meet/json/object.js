// fs (file system) adalah packange dari nodejs untuk berinteraksi dengan file.
const fs = require('fs');

// Path yang dibaca oleh function di bawah ini sudah benar. Tidak masuk ke dalam block catch
const getJsonDataBukuSuccess = () => {
    try {
        const data = fs.readFileSync('./meet/data/buku.json', 'utf8');
        return JSON.parse(data);
    } catch(e) {
        console.log('Error: message', e.message);
    }
};

const dataBuku = getJsonDataBukuSuccess();

// Cara mengakses value dari sebuah json object. apakah parent atau child json object tersebut. Menggunakan notasi (.)
console.log('judul', dataBuku.judul)
console.log('alamat', dataBuku.alamat)
console.log('kode pos', dataBuku.alamat.kodePos)
console.log('pengarang', dataBuku.pengarang)
console.log('genre', dataBuku.genre)
console.log('genre', dataBuku.genre[1])


// Path yang dibaca oleh function di bawah ini salah. Jadi akan masuk ke dalam block catch
// Try Catch Block: Sintaks yang memperbolehkan kita untuk “menangkap” hasil eror sehingga skrip bisa berjalan sesuai dengan arahan kita, dibanding hanya berhenti saja.
// Uncomment line di bawah ini untuk melihat proses yang terjadi didalam block catch
// const getJsonDataBukuFailed = () => {
//     try {
//         var data = fs.readFileSync('./meet/data/bukuu.json', 'utf8');
//         return JSON.parse(data);
//     } catch(e) {
//         console.log('Error: message', e.message);
//     }
// };

// const dataBuku2 = getJsonDataBukuFailed();
// console.log('judul', dataBuku2.judul);
console.log("==========================================");
const jsonObject = {
    judul: "Thinking Fast and Slow",
    pengarang: "Anthony Hadi",
    alamat: {
        kota: "Surabaya",
        provinsi: "Jawa Timurrrrr",
        kodePos: 12345
    },
    halaman: 312,
    genre: ["pengembangan", "keuangan", "motivasi"],
    terjemahan: false,
    define: function (harga) {
        return `buku ini judulnya ${this.judul}, oleh pengarang ${this.pengarang} harga ${harga}`;
    }
};

console.log(jsonObject.define('3000'));