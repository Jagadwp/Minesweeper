import { GameService } from '../../src/core/GameService.js';
import { Board } from '../../src/core/Board.js';

describe('GameService', () => {
  it('should end game if mine is revealed', () => {
    const board = new Board(3, 1);
    const game = new GameService(board);

    // Find mine position
    let minePos;
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
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
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        const cell = board.getCell(x, y);
        if (!cell.isMine && cell.adjacentMines > 0) {
          safePos = [x, y];
          break;
        }
      }
      if (safePos) break;
    }

    game.playTurn(...safePos);
    expect(game.isGameOver()).toBe(false);
  });
});
