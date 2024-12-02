import * as fs from "fs";

// 🎄 🎅 Advent of Code 2024 Day 2 🎅 🎄

const input = fs.readFileSync("input.txt", "utf8");
const reports = input.trim().split("\n");
const levels = reports.map((report) =>
	report.split(" ").map((level) => parseInt(level))
);

// 🍬 🍭 Part 1 🍭 🍬

let partOneSafeReports = 0;

levels.forEach((level) => {
	const isSafe = isSafeLevel(level);
	isSafe && partOneSafeReports++;
});

console.log(`🎄 🎅 The answer to part 1 is: ${partOneSafeReports} 🍬 🍭`);

// 🍬 🍭 Part 2 🍭 🍬

let partTwoSafeReports = 0;

levels.forEach((level) => {
	let isSafe = false;
	const possibleVariants = [];

	for (let i = 0; i < level.length; i++) {
		possibleVariants.push(level.filter((_, index) => index !== i));
	}

	for (let i = 0; i < possibleVariants.length; i++) {
		if (isSafeLevel(possibleVariants[i])) {
			isSafe = true;
			break;
		}
	}

	isSafe && partTwoSafeReports++;
});

console.log(`🎄 🎅 The answer to part 2 is: ${partTwoSafeReports} 🍬 🍭`);

// utils

function isSafeLevel(level: number[]): boolean {
	let isSafe = false;

	const levelType = level[0] > level[1] ? "decrease" : "increase";

	for (let i = 0; i < level.length - 1; i++) {
		const diff = Math.abs(level[i] - level[i + 1]);
		if (diff < 1 || diff > 3) {
			isSafe = false;
			break;
		}

		if (levelType === "increase" && level[i] < level[i + 1]) {
			isSafe = true;
		} else if (levelType === "decrease" && level[i] > level[i + 1]) {
			isSafe = true;
		} else {
			isSafe = false;
			break;
		}
	}

	return isSafe;
}
