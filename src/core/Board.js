import { Cell } from './Cell.js';
 
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
      const x = Math.floor(Math.random() * this.size);
      const y = Math.floor(Math.random() * this.size);

      if (!this.cells[x][y].isMine) {
        this.cells[x][y].isMine = true;
        placed++;
      }
    }
  }

  calculateAdjacentMines() {
    const dirs = [-1, 0, 1];

    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        if (this.cells[x][y].isMine) continue;

        let count = 0;
        for (let dx of dirs) {
          for (let dy of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            if ((dx || dy) && this.isValidCoord(nx, ny) && this.cells[nx][ny].isMine) {
              count++;
            }
          }
        }

        this.cells[x][y].adjacentMines = count;
      }
    }
  }

  getCell(x, y) {
    return this.isValidCoord(x, y) ? this.cells[x][y] : null;
  }

  isValidCoord(x, y) {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
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
