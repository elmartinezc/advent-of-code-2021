const fs = require('fs');
let arr = fs.readFileSync('../inputfiles/day3.txt').toString().split("\n");

// Part 1
let counts = [], gammaRate = [], epsilonRate = [], oxygenRating = [], co2Rating = [];

arr.forEach(
    (val) => {
        val.split('').forEach((char, i) => {
            counts[i] ??= 0;
            char === '1' ? counts[i]++ : counts[i]--;
        });
    }
);

counts.forEach((num, i) => {
    counts[i] >= 1 ? gammaRate[i] = '1' : gammaRate[i] = '0'
})

gammaRate.forEach((num, i) => {
    gammaRate[i] === '1' ? epsilonRate[i] = '0' : epsilonRate[i] = '1';
})

console.log('Part 1: ' + parseInt(gammaRate.join(''),2) * parseInt(epsilonRate.join(''), 2));

// Part 2

const oxygenGeneratorValidBit = (pos) => {
    return counts[pos] >= 0 ? '1' : '0';
}

const co2GeneratorValidBit = (pos) => {
    return counts[pos] <= 0 ? '0' : '1';
}

const filterArrayByBitCriteria = (arr, validationFunc, pos = 0) => {
    let validBit = validationFunc(pos);
    let filteredArray = arr.filter((val) => {
        return val[pos] === validBit
    });

    if (filteredArray.length !== 1) return filterArrayByBitCriteria(filteredArray, validationFunc,pos + 1);
    else return filteredArray[0];
};

const oxygenGeneratorValue = filterArrayByBitCriteria(arr, oxygenGeneratorValidBit)
const co2GeneratorValue = filterArrayByBitCriteria(arr, co2GeneratorValidBit)

console.log('Part 2: ' + parseInt(oxygenGeneratorValue, 2) * parseInt(co2GeneratorValue, 2));