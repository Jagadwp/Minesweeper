import { GameService } from '../../src/core/GameService.js';
import { Board } from '../../src/core/Board.js';

describe('GameService', () => {
  it('should end game if mine is revealed', () => {
    const board = new Board(3, 1);
    const game = new GameService(board);

    // Find mine position
    let minePos;
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        if (board.getCell(x, y).isMine) {
          minePos = [x, y];
        }
      }
    }

    game.playTurn(...minePos);
    expect(game.isGameOver()).toBe(true);
  });

  it('should not end game if safe cell is revealed', () => {
    const board = new Board(3, 1);
    const game = new GameService(board);

    // Find not mine cell
    let safePos;
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        if (!board.getCell(x, y).isMine) {
          safePos = [x, y];
          break;
        }
      }
    }

    game.playTurn(...safePos);
    expect(game.isGameOver()).toBe(false);
  });
});
