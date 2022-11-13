function Angkot(namaSupir, trayek, penumpang, kas) {
    this.namaSupir = namaSupir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang == 0) {
            console.log("angkot masih kosong!");
            return false;
        }

        for (let i = 0; i <= this.penumpang; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar
                return this.penumpang;
            }
        }

    }
}

let angkot1 = new Angkot("Azis", ["Tangerang", "Cipondoh"], [], 0);

console.log(angkot1.penumpangNaik("Alek", "Wildan"));

console.log(angkot1.penumpangTurun("Wildan", 2500));