import readline from 'readline';
import { GameService } from '../core/GameService.js';
import { Board } from '../core/Board.js';
import { InputService } from '../core/InputService.js';

export class GameApp {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.size = 0;
    this.mineCount = 0;
    this.gameService = null;
  }

  start() {
    this.rl.question('Enter board size (n): ', (answer) => {
      const size = parseInt(answer);
      if (isNaN(size) || size < 2) {
        console.log('❌ Invalid size. Try again.');
        return this.start();
      }

      this.size = size;
      this.askMineCount();
    });
  }

  askMineCount() {
    this.rl.question(`Enter number of mines: `, (answer) => {
      const mines = parseInt(answer);
      
      if (isNaN(mines) || mines <= 0) {
        console.log('❌ Invalid mine count. Try again.');
        return this.askMineCount();
      }

      if (mines >= this.size ** 2) {
        console.log(`❌ Mine count should be less than ${this.size ** 2}.`);
        return this.askMineCount();
      }

      this.mineCount = mines;
      const board = new Board(this.size, this.mineCount);
      this.gameService = new GameService(board);
      
      this.printBoard();
      this.nextMove();
    });
  }

  printBoardOld() {
    const boardState = this.gameService.getBoardState();
    boardState.forEach(row => console.log(row.join(' ')));
  }
  
  printBoard() {
    const boardState = this.gameService.getBoardState();
    const size = boardState[0].length;

    // Print column headers (X-axis)
    const columnHeader = '\n   ' + Array.from({ length: size }, (_, i) => i).join(' ');
    console.log(columnHeader);
  
    // Print top border
    console.log('  +' + '-'.repeat(size * 2 - 1) + '+');
  
    // Print each row with side borders and row numbers (Y-axis)
    boardState.forEach((row, y) => {
      const rowLine = row.join(' ');
      console.log(`${y} |${rowLine}|`);
    });
  
    // Print bottom border
    console.log('  +' + '-'.repeat(size * 2 - 1) + '+');
  }

  nextMove() {
    this.rl.question('Enter coordinates (row,column): ', (input) => {
      const [x, y] = InputService.parseCoordinates(input);

      if (!this.gameService.isValidMove(x, y)) {
        return this.nextMove();
      }

      const result = this.gameService.playTurn(x, y);
      this.printBoard();
      console.log(result);

      if (this.gameService.isGameOver()) {
        this.rl.close();
      } else {
        this.nextMove();
      }
    });
  }
}
