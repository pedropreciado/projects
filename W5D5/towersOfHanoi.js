const readLine = require('readline');

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

class TowersOfHanoi {

  constructor() {
    this.stacks = [[3, 2, 1], [], []]
    this.promptMove();
  }

  promptMove() {
    while (true) {
    console.log(this.stacks)
    reader.question('Where from?: ', function (fromTower) {
      reader.question('Where to?: ', function (toTower) {
        let disc = this.stacks[parseInt(fromTower)].pop();
        this.stacks[parseInt(toTower)].push(disc);
        console.log(this.stacks);

      })
    } )
  }
  }

}

game = new TowersOfHanoi;
