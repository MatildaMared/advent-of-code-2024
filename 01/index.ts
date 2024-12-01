import * as fs from "fs";

// 🎄 🎅 Advent of Code 2024 Day 1 🎅 🎄

const input = fs.readFileSync("input.txt", "utf8");
const lines = input.split("\n");

const leftList = lines
	.map((line) => parseInt(line.split(" ")[0]))
	.sort((a, b) => a - b);
const rightList = lines
	.map((line) => parseInt(line.split(" ").slice(1).join(" ")))
	.sort((a, b) => a - b);

// 🍬 🍭 Part 1 🍭 🍬

let totalDistance = 0;

for (let i = 0; i < leftList.length; i++) {
	const lowestInLeft = leftList[i];
	const lowestInRight = rightList[i];
	const distance = Math.abs(lowestInRight - lowestInLeft);
	totalDistance += distance;
}

console.log(`🎄 🎅 The answer to part 1 is: ${totalDistance} 🍬 🍭`);

// 🍬 🍭 Part 2 🍭 🍬

let similarityScore = 0;

for (let i = 0; i < leftList.length; i++) {
	const currentLeft = leftList[i];
	const count = rightList.filter((right) => right === currentLeft).length;
	similarityScore += currentLeft * count;
}

console.log(`🎄 🎅 The answer to part 2 is: ${similarityScore} 🍬 🍭`);
