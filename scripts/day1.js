const fs = require('fs');
let arr = fs.readFileSync('../inputfiles/day1.txt').toString().split("\n").map(n => Number(n));

// Part 1
let increaseCount = 0;
for (const [i, val] of arr.entries()) {
    if (val > arr[i - 1]) {
        increaseCount = increaseCount + 1;
    }
}
console.log("Part 1: " + increaseCount);

// Part 2
increaseCount = 0;
for (const [i, val] of arr.entries()) {
    const a = val + arr[i + 1] + arr[i + 2]
    const b = arr[i + 1] + arr[i + 2] + arr[i + 3]

    if (b > a) increaseCount++;
}
console.log("Part 2: " + increaseCount);