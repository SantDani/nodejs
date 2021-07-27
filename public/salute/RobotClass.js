'use strict';
let events = require('events');
const ACTION = {
    FORWARD: 'forward',
    SALUTE:  'salute',
    BACK:    'back'
};


class RobotClass extends events{
    constructor(name) {
        super(); // super() If we want execute constructor from super Class
        this.name = name;
    }

    salute(){
        console.log(`Hola, mi nombre es ${this.name}`);
        this.emit(ACTION.SALUTE);
    }

    forward(){
        console.log(`${this.name} camina al frente`);
        this.emit(ACTION.FORWARD);
    }

    back(){
        console.log(`${this.name} camina hacia atrás`);
        this.emit(ACTION.BACK);
    }
}

let c3PO = new RobotClass('C-3PO');

c3PO.on(ACTION.FORWARD, function (){
    console.log(`\t${this.name} da dos pasos al frente`);
});

c3PO.on(ACTION.BACK, function (){
    console.log(`\t${this.name} da dos pasos atrás`);
});

c3PO.salute();
c3PO.forward();
c3PO.back();

/**
 * Result
 *
 * Hola, mi nombre es C-3PO
 *
 C-3PO camina al frente
    C-3PO da dos pasos al frente

 C-3PO camina hacia atrás
    C-3PO da dos pasos atrá
 */

