//herencia

"use strict"
//definir la clase
class Cliente {
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es ${this.saldo}`
    }
    //para mostrarlas no requiere instancias
    static bienvenido(){
        return 'Bienvenido al cajero';
    }
}


//herencia
//la clase empresa hereda todo lo del cliente
//empresa hereda metodos, atributos y constructor
class Empresa extends Cliente {
    constructor(nombre,saldo,telefono,categoria){
        //genera error hay que 
        //utilizar la clase super()
      /*   this.nombre=nombre;
        this.saldo=saldo; */
        super(nombre,saldo);//hereda atributos constructor
        this.telefono=telefono;
        this.categoria=categoria;
    }
    //reescribe al método bienvenido
    static bienvenido(){
        return 'Bienvenido al cajero de empresas';
    }
    //si quiero reescribir el metodo mostrarInformación
    //solo tengo que meterlo en la clase empresa
/*     mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es ${this.saldo}, tu teléfono es ${this.telefono}`
    } */
}

//instanciar la clase
const juan = new Cliente('juan',400);
const empresa=new Empresa('Codigo con Juan',500,12345,'Aprendizaje en línea');
//el método se hereda
console.log(empresa);
console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenido());
console.log(Empresa.bienvenido());
