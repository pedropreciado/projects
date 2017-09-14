const readLine = require('readline');

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askIfGreaterThan = function askIfGreaterThan(el1, el2, callback) {

  reader.question(`Is ${el1} > ${el2}? (t/f): `, function (answer){
    if (answer == 't'){
      callback(true);
    } else {
      callback(false);
    }
  });
}

const innerBubbleSortLoop = function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps)
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan === true) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
    })
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}


  absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });
