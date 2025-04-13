import { Cell } from './Cell.js';

// This version use (X,Y) as (horizontal/column, vertical/row) position
export class Board {
  constructor(size, mineCount) {
    this.size = size;
    this.mineCount = mineCount;
    this.cells = this.generateBoard();
    this.placeMines();
    this.calculateAdjacentMines();
  }

  generateBoard() {
    return Array.from({ length: this.size }, () =>
      Array.from({ length: this.size }, () => new Cell())
    );
  }

  placeMines() {
    let placed = 0;
    while (placed < this.mineCount) {
      const x = Math.floor(Math.random() * this.size); // horizontal
      const y = Math.floor(Math.random() * this.size); // vertical

      if (!this.cells[y][x].isMine) { // y first
        this.cells[y][x].isMine = true;
        placed++;
      }
    }
  }

  isValidCoord(x, y) {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }

  calculateAdjacentMines() {
    const dirs = [-1, 0, 1];

    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        if (this.cells[y][x].isMine) continue;

        let count = 0;
        for (let dx of dirs) {
          for (let dy of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            if (!(dx === 0 && dy === 0) && this.isValidCoord(nx, ny) && this.cells[ny][nx].isMine) {
              count++;
            }
          }
        }

        this.cells[y][x].adjacentMines = count;
      }
    }
  }

  getCell(x, y) {
    return this.isValidCoord(x, y) ? this.cells[y][x] : null;
  }

  revealCell(x, y) {
    const cell = this.getCell(x, y);
    if (!cell || cell.isRevealed) return;
    cell.reveal();

    if (cell.adjacentMines === 0 && !cell.isMine) {
      for (let dx of [-1, 0, 1]) {
        for (let dy of [-1, 0, 1]) {
          if (dx || dy) this.revealCell(x + dx, y + dy);
        }
      }
    }
  }

  allSafeCellsRevealed() {
    return this.cells.flat().every(cell =>
      cell.isRevealed || cell.isMine
    );
  }

  getDisplayState() {
    return this.cells.map(row => row.map(cell => cell.display()));
  }

  revealAll() {
    for (let row of this.cells) {
      for (let cell of row) {
        cell.reveal();
      }
    }
  }
}
