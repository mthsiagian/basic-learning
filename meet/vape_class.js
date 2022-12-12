class Atomizer {
    constructor(color, isSingleCoil, isCoilIntact){
        this.color = color;
        this.isSingleCoil = isSingleCoil;
        this.isCoilIntact = isCoilIntact;
    }

    getIsCoilIntact() {
        return this.isCoilIntact;
    }
}

class Mod {
    constructor(atomizer, battery) {
        this.atomizer = atomizer;
        this.battery = battery;
    }

    firing() {
        if(this.atomizer.getIsCoilIntact() && this.battery.percentage > 0) {
            console.log('Vape bisa nyala');
        } else {
            console.log('Vape tidak berfungsi semestinya');
        }
    }
}

class Battery {
    constructor(capacity, percentage) {
        this.capacity = capacity;
        this.percentage = percentage;
    }

    getPercentage() {
        return this.percentage;
    }
}

const reloadAtomizer = new Atomizer('hitam', true, true);
const xyzAtomizer = new Atomizer('hitam', true, true);

const batteryABC = new Battery(3200, 0);
const batteryBCD = new Battery(1600, 15);

const teslaMod = new Mod(reloadAtomizer, batteryABC);
teslaMod.firing();