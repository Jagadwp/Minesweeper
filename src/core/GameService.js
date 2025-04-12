// GameService.js
export class GameService {
  constructor(board) {
    this.board = board;
    this.gameOver = false;
    this.win = false;
  }

  playTurn(x, y) {
    const cell = this.board.getCell(x, y);
    if (cell.isRevealed) {
      throw new Error('Cell already revealed');
    }

    this.board.revealCell(x, y);
    if (cell.isMine) {
      this.gameOver = true;
      return 'BOOM! You hit a mine!';
    }

    if (this.board.allSafeCellsRevealed()) {
      this.gameOver = true;
      this.win = true;
      return 'Congratulations! You cleared all safe cells!';
    }

    return 'Safe move!';
  }
}
