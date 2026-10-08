const prompt = require("prompt-sync")();

prompt("Marca: ");


function Vehiculo(marca, modelo, año, color, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.precio = precio;
    this.kilometraje = false;
}