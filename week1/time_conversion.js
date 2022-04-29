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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let time = s.split("");

  if (time.includes("P") && time[0] == 1 && time[1] == 2) {
    time = time.slice(0, -2);
    return time.join("");
  } else if (time.includes("P" || "p")) {
    time[0] = parseInt(time[0]);
    time[0]++;
    time[1] = parseInt(time[1]);
    time[1] += 2;

    if (time[1] >= 10 && time[0] !== 1) {
      time = time.shift();
    }

    if (time[1] >= 10 && time[0] === 1) {
      time[0]++;
      time[1] = time[1] - 10;
    }

    time = time.slice(0, -2);
    return time.join("");
  }

  if (time.includes("A") && time[0] == 1 && time[1] == 2) {
    time[0] = 0;
    time[1] = 0;

    time = time.slice(0, -2);
    return time.join("");
  } else if (time.includes("A")) {
    time = time.slice(0, -2);
    return time.join("");
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
