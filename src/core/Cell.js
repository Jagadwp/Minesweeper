export class Cell {
  constructor() {
    this.isMine = false;
    this.isRevealed = false;
    this.adjacentMines = 0;
  }

  reveal() {
    this.isRevealed = true;
  }

  display() {
    if (!this.isRevealed) return '#';
    if (this.isMine) return '*';
    return this.adjacentMines > 0 ? this.adjacentMines.toString() : ' ';
  }
}
