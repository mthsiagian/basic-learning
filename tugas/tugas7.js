// Buatlah sebuah class untuk mengggambarkan jenisKartu joker.
class Joker {
    #angka;
    #jenisKartu
    constructor(angka , jenisKartu) {
        this.#angka = angka;
        this.#jenisKartu = jenisKartu;
    }
    // setangka() {
    //     this.#angka = angka;
    // }
    // getangka() {
    //    return this.#angka;
    // }
    kegunaan(){
        return this.#angka == 'number'
    }
    waru (){
       return this.#jenisKartu == "waru";
    }
    hati(){
       return this.#jenisKartu == "hati";
    }
    wajik (){
       return this.#jenisKartu == "wajik";
    }
    keriting(){
       return this.#jenisKartu == "keriting";
    }
}
const joker = new Joker (1 , "hati");

const dauHati = joker.hati();
console.log(dauHati);