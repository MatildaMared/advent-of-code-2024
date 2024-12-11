import * as fs from "fs";

// 🎄 🎅 Advent of Code 2024 Day 11 🎅 🎄

const input = fs.readFileSync("input.txt", "utf8");
const stones = input.split(" ").map((stone) => parseInt(stone));

// 🍬 🍭 Part 1 🍭 🍬

const numberOfBlinks = 25;

for (let i = 1; i <= numberOfBlinks; i++) {
	for (let stoneIndex = 0; stoneIndex < stones.length; stoneIndex++) {
		let currentStone = stones[stoneIndex];
		const newStones: number[] = [];

		if (currentStone === 0) {
			newStones.push(1);
		} else if (currentStone.toString().length % 2 === 0) {
			const half = currentStone.toString().length / 2;
			const firstStone = parseInt(currentStone.toString().slice(0, half));
			const secondStone = parseInt(currentStone.toString().slice(half));
			newStones.push(firstStone, secondStone);
		} else {
			newStones.push(currentStone * 2024);
		}

		stones.splice(stoneIndex, 1, ...newStones);
		stoneIndex += newStones.length - 1;
	}
}

console.log(`🎄 🎅 The answer to part 1 is: ${stones.length} 🍬 🍭`);

// 🍬 🍭 Part 2 🍭 🍬

console.log(`🎄 🎅 The answer to part 2 is: ${undefined} 🍬 🍭`);
