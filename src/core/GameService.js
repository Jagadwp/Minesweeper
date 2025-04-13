export class GameService {
  constructor(board) {
    this.board = board;
    this.gameOver = false;
  }

  playTurn(x, y) {
    const cell = this.board.getCell(x, y);
    if (!cell || cell.isRevealed) {
      return '\nCell already revealed or invalid.';
    }

    this.board.revealCell(x, y);

    if (cell.isMine) {
      this.board.revealAll();
      this.gameOver = true;
      return '\n💥 BOOM! You hit a mine!';
    }

    if (this.board.allSafeCellsRevealed()) {
      this.gameOver = true;
      return '🎉 You cleared all safe cells!';
    }

    return '\n✅ Safe move!';
  }

  getBoardState() {
    return this.board.getDisplayState();
  }

  isValidMove(x, y) {
    const cell = this.board.getCell(x, y);

    if (!cell) {
      console.log('\nInvalid cell.');
      return false
    }
    
    if (cell.isRevealed) {
      console.log('\nCell already revealed.');
      return false
    }
    
    return true;
  }
  
  isGameOver() {
    return this.gameOver;
  }
}
