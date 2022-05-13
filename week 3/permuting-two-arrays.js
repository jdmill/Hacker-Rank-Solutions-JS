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
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
  // Write your code here

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[j] > A[j + 1]) {
        let temp = A[j];
        A[j] = A[j + 1];
        A[j + 1] = temp;
      }
    }
  }
  console.log(A);

  for (let i = 0; i < B.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (B[j] < B[j + 1]) {
        let temp = B[j];
        B[j] = B[j + 1];
        B[j + 1] = temp;
      }
    }
  }
  console.log(B);
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const A = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((ATemp) => parseInt(ATemp, 10));

    const B = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((BTemp) => parseInt(BTemp, 10));

    const result = twoArrays(k, A, B);

    ws.write(result + "\n");
  }

  ws.end();
}
