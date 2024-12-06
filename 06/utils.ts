export enum Direction {
	North,
	East,
	South,
	West,
}

export type Position = {
	x: number;
	y: number;
};

export function findStartingPosition(grid: string[][]): Position {
	let startingPosition: Position = { x: 0, y: 0 };
	for (let i = 0; i < grid.length; i++) {
		const index = grid[i].indexOf("^");
		if (index > -1) {
			startingPosition = { x: index, y: i };
			break;
		}
	}

	return startingPosition;
}

export function turnClockwise(currentDirection: Direction): Direction {
	switch (currentDirection) {
		case Direction.North:
			return Direction.East;
		case Direction.East:
			return Direction.South;
		case Direction.South:
			return Direction.West;
		case Direction.West:
			return Direction.North;
	}
}

export function positionIsWithinGrid(
	position: Position,
	grid: string[][]
): boolean {
	return (
		position.x >= 0 &&
		position.x < grid[0].length &&
		position.y >= 0 &&
		position.y < grid.length
	);
}

export function findNextPosition(
	position: Position,
	direction: Direction
): Position {
	switch (direction) {
		case Direction.North:
			return { x: position.x, y: position.y - 1 };
		case Direction.East:
			return { x: position.x + 1, y: position.y };
		case Direction.South:
			return { x: position.x, y: position.y + 1 };
		case Direction.West:
			return { x: position.x - 1, y: position.y };
	}
}

export function printGrid(grid: string[][]): void {
	grid.forEach((row) => {
		console.log(row.join(""));
	});
}
