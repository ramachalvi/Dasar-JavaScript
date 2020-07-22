class PersegiPanjang{
    constructor(p, l){

        this.panjang = p
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    } 

    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

class Balok extends PersegiPanjang {
    constructor(p,l,t){
        super(p,l);
        this.tinggi = t
    }

    luas = () => {
        return (2* this.panjang * this.lebar) + (2 * this.panjang * this.tinggi) + (2 * this.lebar * this.tinggi)
    }

    volume = () => {
        return this.lebar * this.tinggi * this.panjang
    }
}

let tanah = new Balok(10,20,30)
console.log("Luas = " + tanah.luas() )
console.log("volume = " + tanah.volume())

   