function Computador (marca,procesador,ramGB,precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.precio = precio;
}

const  c1 = new Computador("Hp","ryzen 5 5600g","16",2000);
const  c2 = new Computador("Alienware","intelcorei9","32",4000);
const  c3 = new Computador("Mac","ProcesadorMac","8",2700);


console.log(c1);
console.log(c2);
console.log(c3);