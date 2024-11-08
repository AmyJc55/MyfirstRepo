/*
poo
tenemos que trabjar con cons para trabajar con objetos

clases se refiere a molde o plantilla para poder crear un objeto
constructor: es una funcion obligatoria para crear objetos (chefsitx)
atraves de caracteristicas o atributos especificas
 Objetos: es lo que contruimos a traves de la clase y el contructor
 Atributos: Son las carcteristicas que le da al objeto
 Metodoo: Lo que hace nuestro objeto (saludar, brincar correr )
 Instanciacion: Cuando se termina de contruir la clase, el constructor y el objeto

 HERENCIA: cuenta la palabra extends, permite reutilizar el codigo clase padre en la clase hijo
 POLIMORFISMO: el comportamiento de cada objeto de la misma clase a un metodo 
 ENCAPUSULAMIENTO: Se refiere a encerrar y7o ocultar el codigo 
 ABSTRACCIONse refiere a ser muy especificos con los objetos (resumir)
MODULARIDAD; nos permite hacer modificaciones y mejoras manteniendo el codigo
METODOS ESTATICOS (static) funciones que nos permite ejecutar una clase sin instanciar el objeto 
Y 
METODOS ACCESORES (tarea ) TEREaaaaa
Metodos accesorios
Principiios  Solid
OBJETOS JSON: Javascript object notation (no tienen un metodos) sirve como base de datos 

*/
class Ch47 { // Clase principal o clase padre
    constructor(nombre, apellido, email, edad) { // Constructor para crear el objeto
        this.name = nombre; // "this" selecciona el objeto que estamos creando
        this.lastName = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Holi, soy ${this.name} ${this.lastName}, mi correo es ${this.email} y mi edad es ${this.age}`;
    }

    infoIntegrantes() {
        console.log(this.info);
    }
}

class Instruccion extends Ch47 { // Clase hija que hereda de Ch47
    constructor(nombre, apellido, email, edad, escolaridad) {
        super(nombre, apellido, email, edad); // Llama al constructor de la clase padre
        this.grado = escolaridad;
    }

    static darMentoria() { // Método estático
        console.log("Tienes muchos mentees para mentoría.");
    }
}

// Nueva clase para Mentoria
class Mentoria { 
    constructor(nombre, apellido, lenguaje) {
        this.name = nombre;
        this.lastName = apellido;
        this.language = lenguaje;
        this.info = `Soy Mentee ${this.name} ${this.lastName}, mi lenguaje favorito es ${this.language}`;
    }

    infoMentoria() {
        console.log(this.info);
    }
    //para recibir algo 
    get _nombres1(){
        return this.name

    //para modificar algo
     
    }
    
}

// Creación de instancias (objetos)
const inte1 = new Ch47("Xaxiry", "Gonzalez", "xaxiry@gmail.com", 27);
inte1.infoIntegrantes();

const inte2 = new Instruccion("Liliana", "Aguirre", "lili@gmail.com", 30, "licenciatura");
inte2.infoIntegrantes();
Instruccion.darMentoria();

const mentee1 = new Mentoria("Carlos", "Ramírez", "JavaScript");
mentee1.infoMentoria();

int4.infoIntegrantes();
 int4._nombre1 = "Juan" 
console.log (int4._nombre)


/*


¿Qué son los métodos accesores?
Los métodos accesores son formas de leer y actualizar los valores de las propiedades en un objeto 
(las propiedades son como las "características" o "atributos" de ese objeto).

Getters (get): Sirven para "obtener" o leer el valor de una propiedad.
Setters (set): Sirven para "establecer" o cambiar el valor de una propiedad.
Con los getters y setters, podemos hacer algo más que solo acceder o cambiar un valor.
 Por ejemplo, podemos agregar una regla que diga: "El nombre no puede estar vacío" o "La edad debe ser un número positivo". 
 Esto le agrega una capa de control a nuestras propiedades.
*/