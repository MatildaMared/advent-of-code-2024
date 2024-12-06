import * as fs from "fs";
import { Direction, findNextPosition, findStartingPosition, Position, positionIsWithinGrid, turnClockwise } from "./utils";

// 🎄 🎅 Advent of Code 2024 Day 6 🎅 🎄

const input = fs.readFileSync("input.txt", "utf8");
const grid = input.split("\n").map((row) => row.split(""));

// 🍬 🍭 Part 1 🍭 🍬

let position = findStartingPosition(grid);
let currentDirection = Direction.North;
let hasLeftGrid = false;

const obstacleSymbols = ["#", "O", "¨^"];
const visitedSymbols = ["|", "-", "X", "+"];

do {
	position = move(currentDirection, position, grid);
} while (!hasLeftGrid);

const visitedDirections = grid
	.flat()
	.filter((symbol) => visitedSymbols.includes(symbol)).length;

console.log(`🎄 🎅 The answer to part 1 is: ${visitedDirections} 🍬 🍭`);

// utils

function move(
	direction: Direction,
	position: Position,
	grid: string[][]
): Position {
	const nextPosition = findNextPosition(position, direction);
	const isWithinGrid = positionIsWithinGrid(nextPosition, grid);
	if (!isWithinGrid) {
		console.log("Reached the end of the grid");
		grid[position.y][position.x] =
			direction === Direction.North || direction === Direction.South
				? "|"
				: "-";
		hasLeftGrid = true;
		return position;
	}
	if (grid[nextPosition.y][nextPosition.x] === "#") {
		currentDirection = turnClockwise(currentDirection);
		grid[position.y][position.x] = "+";

		return move(currentDirection, position, grid);
	} else {
		if (grid[position.y][position.x] !== "+") {
			grid[position.y][position.x] =
				direction === Direction.North || direction === Direction.South
					? "|"
					: "-";
		}
		return nextPosition;
	}
}