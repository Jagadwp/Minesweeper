// Board.js
import { Cell } from './Cell.js';

export class Board {
  constructor(config) {
    this.size = config.size;
    this.mineCount = config.mines;
    this.grid = this._initEmptyGrid();
    this._placeMines();
    this._calculateAdjacentMines();
  }

  _initEmptyGrid() {
    return Array.from({ length: this.size }, () =>
      Array.from({ length: this.size }, () => new Cell())
    );
  }

  _placeMines() {
    let placed = 0;
    while (placed < this.mineCount) {
      const x = Math.floor(Math.random() * this.size);
      const y = Math.floor(Math.random() * this.size);
      const cell = this.grid[x][y];
      if (!cell.isMine) {
        cell.isMine = true;
        placed++;
      }
    }
  }

  _calculateAdjacentMines() {
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        if (!this.grid[x][y].isMine) {
          this.grid[x][y].adjacentMines = this._countAdjacentMines(x, y);
        }
      }
    }
  }

  _countAdjacentMines(x, y) {
    let count = 0;
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const nx = x + dx;
        const ny = y + dy;
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < this.size &&
          ny < this.size &&
          this.grid[nx][ny].isMine
        ) {
          count++;
        }
      }
    }
    return count;
  }

  revealCell(x, y) {
    const cell = this.grid[x][y];
    cell.reveal();
    return cell;
  }

  printBoard(showAll = false) {
    console.clear();
    console.log('Current Board:\n');
    const board = this.grid.map(row =>
      row.map(cell => (showAll || cell.isRevealed ? cell.toString() : '#')).join(' ')
    );
    console.log(board.join('\n'));
  }

  isValidCoordinate(x, y) {
    return x >= 0 && y >= 0 && x < this.size && y < this.size;
  }

  isRevealed(x, y) {
    return this.grid[x][y].isRevealed;
  }

  getCell(x, y) {
    return this.grid[x][y];
  }

  allSafeCellsRevealed() {
    return this.grid.flat().filter(c => !c.isMine && !c.isRevealed).length === 0;
  }
}
