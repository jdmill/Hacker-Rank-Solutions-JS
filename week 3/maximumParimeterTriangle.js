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
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

function maximumPerimeterTriangle(sticks) {
  // Write your code here
  sticks.sort((a, b) => a - b);

  for (let i = sticks.length - 1; i > 1; i--) {
    const side1 = sticks[i - 2] ** 2;
    const side2 = sticks[i - 1] ** 2;
    const hyp = sticks[i] ** 2;
    console.log(side1, side2, hyp);

    if (side1 + side2 > hyp) {
      return [sticks[i - 2], sticks[i - 1], sticks[i]];
    }
  }
  return [-1];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const sticks = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((sticksTemp) => parseInt(sticksTemp, 10));

  const result = maximumPerimeterTriangle(sticks);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
