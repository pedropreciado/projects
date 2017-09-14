class Clock {
  constructor(t) {
    this.date = new Date();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this) , 1000);
  }

  printTime() {
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

  _tick() {
    this.second ++;
    this.printTime();
  }
}

const clock = new Clock();
