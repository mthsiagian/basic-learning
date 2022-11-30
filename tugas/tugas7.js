// Buatlah sebuah class untuk mengggambarkan kartu joker.
class joker {
    #fungsi;
    constructor(fungsi) {
        this.#fungsi = fungsi;
    }
    // setfungsi() {
    //     this.#fungsi = fungsi;
    // }
    // getfungsi() {
    //    return this.#fungsi;
    // }
    kegunaan(){
        if (typeof(this.#fungsi) == 'number'){
            console.log("Kartu Anda adalah Joker !!;D ");
        } else {
            console.log("Maaf Kartu Anda bukan Joker !! -_-")
        }
    }
}
const angka = new joker (1);
angka.kegunaan();