import * as fs from "fs";

// 🎄 🎅 Advent of Code 2024 Day 7 🎅 🎄

const input = fs.readFileSync("input.txt", "utf8");
const lines = input.split("\n");
const equations = lines.map((line) => {
	const parts = line.split(": ");
	return {
		sum: parseInt(parts[0]),
		numbers: parts[1].split(" "),
	};
});

console.log("equations", equations);

// 🍬 🍭 Part 1 🍭 🍬

console.log(`🎄 🎅 The answer to part 1 is: ${undefined} 🍬 🍭`);

// 🍬 🍭 Part 2 🍭 🍬

console.log(`🎄 🎅 The answer to part 2 is: ${undefined} 🍬 🍭`);
