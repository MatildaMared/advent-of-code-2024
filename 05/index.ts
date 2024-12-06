import * as fs from "fs";

// 🎄 🎅 Advent of Code 2024 Day 5 🎅 🎄

const input = fs.readFileSync("input.txt", "utf8").split("\n\n");

const rules = input[0]
	.split("\n")
	.map((rule) => rule.split("|").map((r) => parseInt(r)));
const updates = input[1]
	.split("\n")
	.map((update) => update.split(",").map((u) => parseInt(u)));

// 🍬 🍭 Part 1 🍭 🍬

let middlePagesSum = 0;

updates.forEach((update) => {
	const applicableRules = rules.filter((rule) => {
		return rule.every((r) => update.includes(r));
	});
	const validUpdate = applicableRules.every((rule) => {
		return update.indexOf(rule[0]) < update.indexOf(rule[1]);
	});
	if (validUpdate) {
		const middleNumber = update[Math.floor(update.length / 2)];
		middlePagesSum += middleNumber;
	}
});

console.log(`🎄 🎅 The answer to part 1 is: ${middlePagesSum} 🍬 🍭`);

// 🍬 🍭 Part 2 🍭 🍬

console.log(`🎄 🎅 The answer to part 2 is: ${undefined} 🍬 🍭`);
