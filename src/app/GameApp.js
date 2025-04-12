// GameApp.js
import readline from 'readline';
import { GameConfig } from '../core/GameConfig.js';
import { Board } from '../core/Board.js';
import { GameService } from '../core/GameService.js';
import { InputService } from '../core/InputService.js';

export class GameApp {
  constructor(size, mines) {
    const config = new GameConfig(size, mines);
    this.board = new Board(config);
    this.service = new GameService(this.board);
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  start() {
    this.board.printBoard();
    this._askInput();
  }

  _askInput() {
    this.rl.question('Enter coordinates (x,y): ', input => {
      try {
        const { x, y } = InputService.parseCoordinates(input, this.board.size);
        const result = this.service.playTurn(x, y);
        this.board.printBoard(this.service.gameOver);
        console.log(result);

        if (this.service.gameOver) {
          this.rl.close();
        } else {
          this._askInput();
        }
      } catch (err) {
        console.log('Error:', err.message);
        this._askInput();
      }
    });
  }
}
