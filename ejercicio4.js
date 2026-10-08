function ConstructoraLibro(titulo,autor,año){
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    
    this.prestado = false; 

    this.prestar = function(){
        if (this.prestado === true){
            console.log(`este libro ya fue prestado`);
        }else if(this.prestado === false){
            console.log(`este fue prestado para usted`);
            this.prestado = true;
        }
    }
this.devolver = function(){
        if (this.prestado === false){
            console.log(`no puedes devolver un libro que no ha sido prestado`);
        }else if(this.prestado === true){
            console.log(`el libro ha sido devuelto`);
            this.prestado = false;
        }
    }
}

const l1 = new ConstructoraLibro("100 a;os de soledad", "gabriel", 2005);
const l2 = new ConstructoraLibro("100 a;os de tristeza", "gabriela", 2006);
const l3 = new ConstructoraLibro("100 a;os de lloracion", "gabrlinhno", 2007);
const l4 = new ConstructoraLibro("100 a;os de felicidad", "gabrlinhna", 2008);

l1.prestar();    
l1.prestar();    
l1.devolver();  
l1.devolver();   