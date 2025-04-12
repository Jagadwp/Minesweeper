// Cell.js
export class Cell {
  constructor() {
    this.isMine = false;
    this.isRevealed = false;
    this.adjacentMines = 0;
  }

  reveal() {
    this.isRevealed = true;
  }

  toString() {
    if (!this.isRevealed) return '#';
    if (this.isMine) return '*';
    return this.adjacentMines === 0 ? ' ' : String(this.adjacentMines);
  }
}
