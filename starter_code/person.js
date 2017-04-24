class Person {
  constructor(name, originFloor, destinationFloor){
      this.name = name;
      this.originFloor = originFloor;
      this.destinationFloor = destinationFloor;
  }

}

module.exports = Person;


/*let callStack = [operation1, operation2, operation3...]

function simpleJsInterpreter (callStack) {
  while (!callStack.empty) {
    execute( callStack.pop() );
  }
}
*/
