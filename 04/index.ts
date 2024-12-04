import * as fs from "fs";

// 🎄 🎅 Advent of Code 2024 Day 4 🎅 🎄

type Direction =
	| "up"
	| "down"
	| "left"
	| "right"
	| "upRight"
	| "upLeft"
	| "downRight"
	| "downLeft";

const WORD = "XMAS";

const input = fs.readFileSync("input.txt", "utf8");
const lines = input.split("\n");
const grid = padGrid(
	WORD,
	lines.map((line) => line.split(""))
);

const occurances = findWordOccurances(grid, WORD);

// 🍬 🍭 Part 1 🍭 🍬

console.log(`🎄 🎅 The answer to part 1 is: ${occurances} 🍬 🍭`);

// 🍬 🍭 Part 2 🍭 🍬

const xFormations = findXMasFormations(grid);

console.log(`🎄 🎅 The answer to part 2 is: ${xFormations} 🍬 🍭`);

// Utils

function padGrid(word: string, grid: string[][]): string[][] {
	const numberOfPadding = word.length - 1;

	let newGrid = [...grid];
	for (let i = 0; i < numberOfPadding; i++) {
		newGrid = [
			Array(grid[0].length).fill("."),
			...newGrid,
			Array(grid[0].length).fill("."),
		];
	}

	newGrid = newGrid.map((row) => [
		...Array(numberOfPadding).fill("."),
		...row,
		...Array(numberOfPadding).fill("."),
	]);

	return newGrid;
}

function findWordOccurances(grid: string[][], word: string): number {
	let numberOfOccurances = 0;
	const directions: Direction[] = [
		"up",
		"down",
		"left",
		"right",
		"upRight",
		"upLeft",
		"downRight",
		"downLeft",
	];

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === word[0]) {
				for (let direction of directions) {
					const occurance = checkDirection(grid, word, i, j, direction);
					if (occurance) {
						numberOfOccurances++;
					}
				}
			}
		}
	}

	return numberOfOccurances;
}

function findXMasFormations(grid: string[][]): number {
	let numberOfOccurances = 0;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === "A") {
				if (
					grid[i - 1][j - 1] === "M" &&
					grid[i + 1][j - 1] === "M" &&
					grid[i - 1][j + 1] === "S" &&
					grid[i + 1][j + 1] === "S"
				) {
					numberOfOccurances++;
				}

				if (
					grid[i - 1][j - 1] === "M" &&
					grid[i - 1][j + 1] === "M" &&
					grid[i + 1][j - 1] === "S" &&
					grid[i + 1][j + 1] === "S"
				) {
					numberOfOccurances++;
				}

				if (
					grid[i - 1][j - 1] === "S" &&
					grid[i - 1][j + 1] === "S" &&
					grid[i + 1][j - 1] === "M" &&
					grid[i + 1][j + 1] === "M"
				) {
					numberOfOccurances++;
				}

				if (
					grid[i - 1][j + 1] === "M" &&
					grid[i + 1][j + 1] === "M" &&
					grid[i - 1][j - 1] === "S" &&
					grid[i + 1][j - 1] === "S"
				) {
					numberOfOccurances++;
				}
			}
		}
	}

	return numberOfOccurances;
}

function checkDirection(
	grid: string[][],
	word: string,
	i: number,
	j: number,
	direction: Direction
): boolean {
	let wordFound = true;

	for (let k = 1; k < word.length; k++) {
		switch (direction) {
			case "up":
				if (grid[i - k][j] !== word[k]) {
					wordFound = false;
				}
				break;
			case "down":
				if (grid[i + k][j] !== word[k]) {
					wordFound = false;
				}
				break;
			case "left":
				if (grid[i][j - k] !== word[k]) {
					wordFound = false;
				}
				break;
			case "right":
				if (grid[i][j + k] !== word[k]) {
					wordFound = false;
				}
				break;
			case "upRight":
				if (grid[i - k][j + k] !== word[k]) {
					wordFound = false;
				}
				break;
			case "upLeft":
				if (grid[i - k][j - k] !== word[k]) {
					wordFound = false;
				}
				break;
			case "downRight":
				if (grid[i + k][j + k] !== word[k]) {
					wordFound = false;
				}
				break;
			case "downLeft":
				if (grid[i + k][j - k] !== word[k]) {
					wordFound = false;
				}
				break;
		}
	}

	return wordFound;
}
