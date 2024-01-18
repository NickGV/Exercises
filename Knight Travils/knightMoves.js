function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  const queue = [[start, [start]]];

  const visited = new Set([start.toString()]);
 

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    if (current.toString() === end.toString()) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((position) => console.log(position));
      return path;
    }

    const [x, y] = current;

    for (const move of moves) {
      const [newX, newY] = [x + move[0], y + move[1]];

      const newPosition = [newX, newY].toString();
      if (isValid(newX, newY) && !visited.has(newPosition)) {
        queue.push([[newX, newY], path.concat([[newX, newY]])]);
        visited.add(newPosition);
      }
    }
  }

  console.log("No valid path found.");
  return null;
}

// Ejemplos de uso
knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);
