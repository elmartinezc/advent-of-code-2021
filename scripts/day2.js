const fs = require('fs');
let arr = fs.readFileSync('../inputfiles/day2.txt').toString().split("\n");

// Part 1
let vertical = 0;
let horizontal = 0;

arr.forEach((entry) => {
    const direction = entry.split(" ");
    switch (direction[0]) {
        case 'up':
            vertical -= parseInt(direction[1]);
            break;
        case 'down':
            vertical += parseInt(direction[1]);
            break;
        case 'forward':
            horizontal += parseInt(direction[1]);
            break;
    }
})

console.log('Part 1: ' + vertical * horizontal);

// Part 2
horizontal = vertical = 0;
let aim = 0;

arr.forEach((entry) => {
    const direction = entry.split(" ");
    switch (direction[0]) {
        case 'up':
            aim -= parseInt(direction[1]);
            break;
        case 'down':
            aim += parseInt(direction[1]);
            break;
        case 'forward':
            horizontal += parseInt(direction[1]);
            vertical += aim * parseInt(direction[1]);
            break;
    }
})

console.log('Part 2: ' + vertical * horizontal);