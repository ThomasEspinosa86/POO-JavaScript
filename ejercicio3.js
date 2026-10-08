function Estudiante(nombre, curso, nota) {
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;
    this.aprobado = nota >= 3;   

    this.mostrarResultado = function () {
        if (this.aprobado) {
            console.log(`El estudiante ${this.nombre} aprobo el curso con una nota de ${this.nota}.`);
        } else {
            console.log(`El estudiante ${this.nombre} reprobo el curso con una nota de ${this.nota}.`);
        }
    };
}

const e1 = new Estudiante("Thomas", "6a", 3);
const e2 = new Estudiante("Pedro", "6b", 2);
const e3 = new Estudiante("Pascal", "6c", 4);
const e4 = new Estudiante("Tara", "6d", 1);

e1.mostrarResultado();
e2.mostrarResultado();
e3.mostrarResultado();
e4.mostrarResultado();