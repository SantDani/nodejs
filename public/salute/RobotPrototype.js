const eventEmitter = require('events');

const ACTION = {
    FORWARD: 'forward',
    SALUTE:  'salute',
    BACK:    'back'
};
// utils is necessary for the robot to inherit the events
const util = require('util');


function  Robot(name){
    this.name = name;
}

util.inherits(Robot, eventEmitter);

//Functions that robot share
Robot.prototype.salute = function (){
    console.log('Hola, mi nombre es ' + this.name);
    this.emit(ACTION.SALUTE);
}

Robot.prototype.forward = function (){
    console.log(this.name + ' camina hacia adelante');
    this.emit(ACTION.FORWARD);
}

Robot.prototype.back = function (){
    console.log(this.name + ' camina hacia atrás');
    this.emit(ACTION.BACK);
}

// new Robot
const firstRobot = new Robot('TARS ');

// Robots walk 2 times
firstRobot.on(ACTION.FORWARD, function (){
    console.log('\t' + this.name + 'da dos pasos al frente');
});

firstRobot.on(ACTION.BACK, function (){
    console.log('\t' + this.name + 'da dos pasos atras');
});

firstRobot.salute();
firstRobot.forward();
firstRobot.back();

/**
 * Result:
 *
 * Hola, mi nombre es TARS
 *
 TARS  camina hacia adelante
    TARS da dos pasos al frente

 TARS  camina hacia atrás
    TARS da dos pasos atras
 */
