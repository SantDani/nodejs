module.exports.number = function (){
    console.log(Math.random() * 100000);
}

const names = ["Raul","Pedro","Juan","Alberto","Antonio","Erika","Alejandra","Isabel"];

module.exports.name = function (){
    let indexRandom = Math.floor(Math.random() * names.length);
    console.log(names[indexRandom]);
}

