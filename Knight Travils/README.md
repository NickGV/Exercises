# Knight's Travails

This project involves solving the problem of finding the shortest path for a chess knight to move from an initial position on an 8x8 chessboard to a final position using the Breadth-First Search (BFS) algorithm.

## Problem Description

A chess knight can move to any square on the board from any other square, given enough turns. Its basic move is two steps forward and one step to the side, or one step forward and two steps to the side. It can face any direction.

The goal is to implement a `knightMoves` function that shows the shortest possible way to get from one square to another, outputting all squares the knight will stop on along the way.

## Usage Examples

```javascript
knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);
