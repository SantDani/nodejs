function  Robot(name){
    this.name = name;
}

//Functions that robot share
Robot.prototype.salute = function (){
    console.log('Hola, mi nombre es ' + this.name);
}

Robot.prototype.forward = function (){
    console.log(this.name + ' camina hacia adelante');
}

Robot.prototype.back = function (){
    console.log(this.name + ' camina hacia atrás');
}

// new Robot
const firstRobot = new Robot('TARS');

firstRobot.salute();
firstRobot.forward();
firstRobot.back();


