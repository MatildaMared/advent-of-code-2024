import * as fs from "fs";

// 🎄 🎅 Advent of Code 2024 Day 3 🎅 🎄

let input = "do()" + fs.readFileSync("input.txt", "utf8");

// 🍬 🍭 Part 1 🍭 🍬

const REGEX = /(?<=mul\()\d{1,3},\d{1,3}(?=\))/g;

const partOneCalculations = input.match(REGEX) || [];

const partOneSum = partOneCalculations.reduce((total, calc) => {
	const [firstNumber, secondNumber] = calc.split(",");
	return total + parseInt(firstNumber) * parseInt(secondNumber);
}, 0);

console.log(`🎄 🎅 The answer to part 1 is: ${partOneSum} 🍬 🍭`);

// 🍬 🍭 Part 2 🍭 🍬

const filteredInput = input.split("don't()");
const filteredCalculations: string[] = [];

// remove everything before do()
filteredInput.forEach((possibleCalculation) => {
	const index = possibleCalculation.indexOf("do()");
	if (index > -1) {
		filteredCalculations.push(possibleCalculation.slice(index));
	}
});

const partTwoCalculations = filteredCalculations.join("").match(REGEX) || [];

const partTwoSum = partTwoCalculations.reduce((total, calc) => {
	const [firstNumber, secondNumber] = calc.split(",");
	return total + parseInt(firstNumber) * parseInt(secondNumber);
}, 0);

console.log(`🎄 🎅 The answer to part 2 is: ${partTwoSum} 🍬 🍭`);
