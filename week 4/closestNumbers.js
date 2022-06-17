"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
  // Write your code here
  let diff = null;
  let nums = [];
  const sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    let testDiff = sortedArr[i + 1] - sortedArr[i];
    if (diff === null || testDiff < diff) {
      nums = [];
      diff = testDiff;
      nums.push(sortedArr[i]);
      nums.push(sortedArr[i + 1]);
    } else if (testDiff === diff) {
      nums.push(sortedArr[i]);
      nums.push(sortedArr[i + 1]);
    }
  }

  console.log(nums);
  return nums;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = closestNumbers(arr);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
