class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.waitingList = [];
    this.passengers = [];

  }

  start() {
    this.timer = setInterval(() => this.update(), 1000);}

  stop() {
    clearInterval(this.timer);}

  update() {
    if (this.requests.length > 0){
      for (var i =0 ; i<waitingList.length ; i++){
        this.requests = this.waitingList [i].originFloor;
      }
      if(this.floor < this.requests[0] ){
          this.floorUp();

      }
      if (this.floor > this.requests[0] ){
          this.floorDown();
      }


      log();
    }
   }

  _passengersEnter() {

      
  }

  _passengersLeave() {

  }

  floorUp() {
      if (this.MAXFLOOR <10){
          this.floor +=1;
          this.direction = "up";
      }
   }

  floorDown() {
      if (this.MAXFLOOR >0){
          this.floor -=1;
          this.direction = "down" ;
      }
  }

  call() {
    this.waitingList.push(person);

  }

  log() {
      console.log("We are going to " + this.direction + "and we are in the floor " + this.floor);
   }
}

module.exports = Elevator;


/*  update() {
    if (this.passengers.length > 0º){
      if (this.floor < this.passengers[0].destinationFloor){
        // _.orderBy(this.requests, ['originFloor'],['desc']);
        this.floorUp();
        this.passengers.forEach((elem, indexOf, arr) => {
          if(elem.destinationFloor === this.floor && elem.direction === this.direction){
            this._passengersLeave(indexOf);
          }
        });
        this.requests.forEach((elem, indexOf, arr) => {
          if(elem.originFloor === this.floor && elem.direction === this.direction){
           this._passengersEnter(indexOf);
          }
        });
      } else if (this.floor > this.passengers[0].destinationFloor) {
        this.floorDown();
        this.passengers.forEach((elem, indexOf, arr) => {
          if(elem.destinationFloor === this.floor && elem.direction === this.direction){
            this._passengersLeave(indexOf);
          }
        });
        this.requests.forEach((elem, indexOf, arr) => {
          if(elem.originFloor === this.floor && elem.direction === this.direction){
           this._passengersEnter(indexOf);
          }
        });
      }
    } else {
      if (this.requests.length > 0) {
        if (this.floor < this.requests[0].originFloor){
          this.floorUp();
        } else if (this.floor > this.requests[0].originFloor) {
          this.floorDown();
        } else {
          this._passengersEnter(0);
        }
      }
    }
    this.log();
  }*/
