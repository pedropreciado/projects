const readLine = require('readline');

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = function addnumbers(sum, numsLeft, completionCallback) {

  reader.question('Enter a number: ', function (num){
    num = parseInt(num);
    sum += num;
    numsLeft -= 1
    console.log(sum);

    addNumbers(sum, numsLeft, completionCallback)
    reader.close;
  });

}

addNumbers(0, 300, sum => {console.log(`Total Sum: ${sum}`)});
