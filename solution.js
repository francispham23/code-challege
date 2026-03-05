function isSafe(report) {
  const diffs = [];
  for (let i = 0; i < report.length - 1; i++) {
    diffs.push(report[i + 1] - report[i]);
  }

  const allIncreasing = diffs.every(d => d >= 1 && d <= 3);
  const allDecreasing = diffs.every(d => d <= -1 && d >= -3);

  return allIncreasing || allDecreasing;
}

function solve(input) {
  const reports = input
    .trim()
    .split("\n")
    .map(line => line.split(" ").map(Number));

  const safeCount = reports.filter(isSafe).length;
  return safeCount;
}

// input
const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

console.log(solve(input));