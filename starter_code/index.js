const Elevator = require('./elevator.js');
const Person = require('./person.js');

const andrei = new Person("Andrei", 2, 8);
const rafa = new Person("Rafa", 5, 1);

const elevator = new Elevator();

elevator.start();
elevator.call(andrei)
elevatr.call(rafa)
