// load library events
const events  = require('events');

// manager events
const managerRobot = new events();

// go forward
managerRobot.on('forward',function(){
    console.log('El robot camina hacia el frente');
});

// go back
managerRobot.on('back',function(){
    console.log('El robot camina hacia atrás');
});

// When we order to say hello

// 1r Robot need stop
managerRobot.on('salute',function(){
    console.log('Detener robot.');
});

// 2n Robot can salute
managerRobot.on('salute',function(){
    console.log('El robot dice "Hola, soy R-3PO"!');
});

// Emit events
managerRobot.emit('forward');
managerRobot.emit('back');
managerRobot.emit('salute');
