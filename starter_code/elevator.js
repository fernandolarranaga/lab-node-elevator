class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.currentDirection= "up";
  }

  start() {
    this.elevatorInterval = setInterval(() => {
      this.update();
    }, 1000)
  }


  stop() {
    clearInterval (this.elevatorInterval);
  }

  update() {
    log();

  }

  _passengersEnter() { }
  _passengersLeave() { }

  floorUp() {
    if (this.floor < this.MAXFLOOR){
      this.floor +=1;
      this.currentDirection= "up";
    }

  }


  floorDown() {
    if (this.floor > 0){
      this.floor -=1;
      this.currentDirection="down";

    }
   }


  call() { }

  log() {

    console.log( `Direction: ${this.currentDirection} | Floor: ${this.floor}` );

  }
}

module.exports = Elevator;
