import { Board } from '../../src/core/Board.js';

describe('Board Initialization', () => {
  it('should initialize board with correct number of mines', () => {
    const size = 5;
    const mines = 5;
    const board = new Board(size, mines);

    const mineCount = board.cells.flat().filter(cell => cell.isMine).length;
    expect(mineCount).toBe(mines);
  });

  it('should create a square board', () => {
    const size = 4;
    const board = new Board(size, 3);

    expect(board.cells.length).toBe(size);
    board.cells.forEach(row => expect(row.length).toBe(size));
  });
});
