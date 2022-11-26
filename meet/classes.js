console.log('\n\n=============================================');
console.log('Class in general');
console.log('=============================================');
class Calculator {
  constructor(x, y) {
    this.a = x;
    this.b = y;
    this.checkValidNumber();
  }

  tambah() {
    return this.a + this.b;
    // return x + y;
  }

  kurang() {
    return this.a - this.b;
  }
  
  kali() {
    return this.a * this.b;
  }
  
  bagi() {
    return this.a / this.b;
  }

  checkValidNumber() {
    if(typeof(this.a) !== 'number'|| typeof(this.b) !== 'number') {
      throw Error('Argument input bukan angka');
    }
  }
}

// Instantiation of an object
const calculator = new Calculator(10, 5);

const hasilPenjumlahan = calculator.tambah();
console.log(hasilPenjumlahan)

const hasilPengurangan = calculator.kurang();
console.log(hasilPengurangan);

const hasilPerkalian = calculator.kali();
console.log(hasilPerkalian);

const hasilPembagian = calculator.bagi();
console.log(hasilPembagian);

// Uncomment line below if you wanna see how nodejs throws error.
// When instatiated, constructor of a class is being invoked.
// const calculator2 = new Calculator(10, '5');



// Inheritance - Turunan
console.log('\n\n=============================================');
console.log('Class Inheritance - Turunan');
console.log('=============================================');
class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  greetings() {
    console.log(`Halo nama saya ${this.name}, gender saya ${this.gender}`);
  }
}

const mintho = new Person('Mintho', 'Laki-Laki');
mintho.greetings();
const jery = new Person('Jery', 'Laki-Laki');
jery.greetings();

// Person as a parent
// Policeman as a child
// What Person's property of method has, Policeman also has it
class Policeman extends Person {
  constructor(nama, gender) {
    super(nama, gender);
  }

  greetings() {
    console.log(`Halo selamat siang, dengan ${this.name} disini. Ada yg bisa di bantu ?`)
  }
}
class Student extends Person {
  #kelas

  constructor(nama, gender, kelas) {
    super(nama, gender);

    // private property - tidak bisa di akses dari luar, hanya bisa diakses lewat method dalam class yg sama
    this.#kelas = kelas;
  }

  greetings() {
    console.log(`Halo teman-teman perkenalkan nama saya ${this.name}, saya kelas ${this.#kelas}`)
  }

  getClass() {
    return this.#kelas;
  }
}

const ambarita = new Policeman('Ambarita', 'Laki-Laki');
ambarita.greetings();
const muridBaru = new Student('Jery', 'Perempuan', 5);
muridBaru.greetings();
console.log(muridBaru.getClass()); // 5
