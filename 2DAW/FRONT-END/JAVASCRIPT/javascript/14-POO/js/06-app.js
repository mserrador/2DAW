//COMPARAR LA HERENCIA CON objetos creados con class y mediante funciones

/***************************************ECMScript 5***********************/
//expresión de una función
//Otro forma de heredar con this.base

function Empleado (nombre, departamento="General") {
    this.nombre = nombre;
    this.departamento = departamento;
  }
  
function Director (nombre, departamento, informes=[]) {
    this.base = Empleado;
    this.base(nombre, departamento);
    this.informes = informes;
}
Director.prototype = new Empleado();
  
function Obrero (nombre, departamento, proyectos=[]) {
    this.base = Empleado;
    this.base(nombre, departamento);
    this.proyectos = proyectos;
}
Obrero.prototype = new Empleado();
  
function Ingeniero (nombre, proyectos, maquina) {
    this.base = Obrero;
    this.base(nombre, "Ingeniería", proyectos);
    this.maquina = maquina || "";
}
Ingeniero.prototype = new Obrero();
  
let e1 = new Empleado("luis");
console.log(e1);
  
let e2 = new Director("antonio","informática",[1,2,3]);
console.log(e2);

let e3 = new Obrero("maria","informática",[1,2,3]);
console.log(e3);
  
let e4 = new Ingeniero("jose","informática",[1,2,3], "Sierra");
console.log(e4);
  

/***************************************ECMScript 6***********************/


class Empleado6 {
	
	constructor (nombre, departamento="General") {
		
		this.nombre = nombre;
		this.departamento = departamento ;		
	}
}
	
class Director6 extends Empleado6 {
	
	
	constructor (nombre, departamento, informes=[]) {
		
		super(nombre, departamento);
		this.informes = informes;	
	}	
}

class Obrero6 extends Empleado6 {
	
	constructor  (nombre, departamento, proyectos=[]) {
		
		super(nombre, departamento);
		this.proyectos = proyectos;
	}	
}

class Ingeniero6 extends  Obrero6 {
	
	constructor  (nombre, proyectos, maquina="") {
		
		super(nombre, "Ingeniería", proyectos);
		this.maquina = maquina;
	}
}



let e61 = new Empleado6("luis","informática");
console.log(e61);

let e62 = new Director6("antonio","informática",[1,2,3]);
console.log(e62);

let e63 = new Obrero6("maria","informática",[1,2,3]);
console.log(e63);

let e64 = new Ingeniero6("jose","informática",[1,2,3], "Sierra");
console.log(e64);
