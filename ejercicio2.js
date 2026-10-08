function Mascota(nombre,especie,edad,pesos){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.pesos = pesos;
    this.presentacion = function (){
        return( `saludos, soy ${this.nombre} soy de especie ${this.especie} mi edad es ${this.edad} y cuesto ${this.pesos.toLocaleString()} comprame por favor` )
    }
}
const m1 = new Mascota("toby","perro",21,4500);
const m2 = new Mascota("katty","gato",23,7000);
const m3 = new Mascota("perry","hornitorrinco",24,2000);

console.log(m1.presentacion());
console.log(m2.presentacion());
console.log(m3.presentacion());