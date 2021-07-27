'use strict';

class RobotClass{
    constructor(name) {
        this.name = name;
    }

    salute(){
        console.log(`Hola, mi nombre es ${this.name}`);
    }

    forward(){
        console.log(`${this.name} da dos pasos al frente`);

    }

    back(){
        console.log(`${this.name} da dos pasos atras.`);
    }
}

let c3PO = new RobotClass('C-3PO')

c3PO.salute();
c3PO.forward();
c3PO.back();
