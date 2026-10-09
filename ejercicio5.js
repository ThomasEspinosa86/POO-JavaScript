const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, anio, color, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    this.precio = precio;
    this.encendido = false;   
    this.kilometraje = 0;     

    this.encender = function () {
        if (this.encendido) {
            console.warn(`El ${this.marca} ${this.modelo} ya está encendido.`);
        } else {
            this.encendido = true;
            console.log(`El ${this.marca} ${this.modelo} ha sido encendido.`);
        }
    };
    this.recorrer = function (km) {
        if (!this.encendido) {
            console.warn(`No puedes recorrer con el ${this.marca} ${this.modelo} apagado.`);
        } else {
            this.kilometraje += km;
            console.log(`El ${this.marca} ${this.modelo} recorrió ${km} km. Kilometraje total: ${this.kilometraje} km.`);
        }
    };  
    this.mostrarInfo = function () {
        console.log(
            `${this.marca} ${this.modelo} (${this.anio}), color ${this.color}, ` +
            `precio $${this.precio.toLocaleString()}, ` +
            `${this.kilometraje} km, ${this.encendido ? "encendido" : "apagado"}.`
        );
    };
}
const vehiculos = [];

for (let i = 1; i <= 3; i++) {
    console.log(`\n--- Vehículo ${i} ---`);
    const marca = prompt("Marca: ");
    const modelo = prompt("Modelo: ");
    const anio = Number(prompt("Año: "));
    const color = prompt("Color: ");
    const precio = Number(prompt("Precio: "));

    vehiculos.push(new Vehiculo(marca, modelo, anio, color, precio));
}
console.log("\n===== RESULTADOS =====");
vehiculos[0].mostrarInfo();
vehiculos[0].recorrer(50);     
vehiculos[0].encender();
vehiculos[0].encender();      
vehiculos[0].recorrer(120);
vehiculos[0].mostrarInfo();      
vehiculos[1].encender();
vehiculos[1].recorrer(300);
vehiculos[1].mostrarInfo();
vehiculos[2].mostrarInfo();    